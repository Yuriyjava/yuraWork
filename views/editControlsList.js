define(["resurces/source.js", "modules/props.js"], function (JSsource, JSprops) {

    return function (formId) {
        JSprops.init();
        var dataEditDesigner = JSsource.getDataFromId(formId);
        var fieldTypeList = JSprops.getFieldTypeList();


        var prefixArr = [];
        dataEditDesigner.forEach(function (elem, index, arr) {

            if (prefixArr.indexOf(elem.Prefix) < 0) {
                prefixArr.push(elem.Prefix);
            }

        });



        var dataGrid = new kendo.data.DataSource({
            data: dataEditDesigner,
            autoSync: false,
            schema: {
                model: {
                    id: "FieldId",
                    fields: {
                        FieldId: {
                            validation: {
                                required: true
                            }
                        },
                        FieldName: {
                            validation: {
                                required: true
                            }
                        },
                        FieldType: {
                            validation: {
                                required: true
                            }
                        },
                        Prefix: {
                            validation: {
                                required: true
                            }
                        },
                        Fixed: {
                            type: "boolean"
                        },
                        Properties:{
                        defaultValue: {}
                    }
                    }
                }
            },


        });

        function getProps(fieldType) {

            return getAllPropertiesOfFieldType(fieldType);
        }




        var self = this;



        self.view = new kendo.View("editControlsList", {

            show: function () {
                self.grid = $("#gridProps").kendoGrid({

                    columns: [
                        {
                            field: "FieldId",
                            title: "Field Id",
                            filterable: {
                                mode: "row"
                            }
                    },

                        {
                            field: "FieldName",
                            title: "Field Name",

                                },
                        {
                            field: "FieldType",
                            title: "Field Type",
                            editor: function (container, options) {

                                if (options.model.FieldType) {
                                    var input = $("<input class='k-input k-textbox' name='FieldType' disabled/>").appendTo(container[0]).css("background-color", "gray");
                                } else {
                                    $(container[0]).kendoDropDownList({
                                        dataSource: fieldTypeList,
                                        valuePrimitive: true,
                                        optionLabel: "--Select Value--",
                                        template: '<span>#: name #</span>',
                                        valueTemplate: '<span>#: name #</span>',
                                        change: function (e) {
                                            var value = this.value().name;
                                            var valObj = JSprops.getAllPropertiesOfFieldType(value);
                                            console.log(valObj);
                                            options.model.Properties = valObj;
                                            self.grid.trigger("edit");
                                        }
                                    });
                                }
                            }
                                },
                        {
                            field: "Prefix",
                            title: "Prefix",
                            filterable: {
                                cell: {
                                    template: prefixFilter,
                                    showOperators: false
                                }
                            },
                        },
                        {
                            field: "Fixed",
                            title: "Fixed",

                                },
                        {
                            field: "Properties",
                            hidden: true,
                            editor: function (container, options) {
                                $(container).css("max-height", "200px");
                                $(container).css("overflow", "auto");
                                $(container).on("click", function (e) {
                                    var $t = $(e.target),
                                        arrButton = $t.closest(".arrayButton"),
                                        arrField = arrButton.length && arrButton.attr("data-field");
                                    if (arrButton.length) {

                                        propsPopup(options.model.Properties[arrField]);
                                    }
                                });
                                options.model.Properties && Object.keys(options.model.Properties).forEach(function (elem) {

                                    if (!elem.startsWith("_") && elem != "uid" && elem != "parent") {
                                        if (typeof (options.model.Properties[elem]) == "string" || options.model.Properties[elem] == null) {
                                            var label = $("<label class='k-edit-label' style='width:60%; text-align:left;'>" + elem + ":</label>").appendTo(container);

                                            var input = $("<input class='k-input k-textbox'/>").attr("name", "Properties." + elem).appendTo(container);

                                        } else if (typeof (options.model.Properties[elem]) == "boolean") {
                                            var label = $("<label class='k-edit-label' style='width:60%; text-align:left;'>" + elem + " :</label></br>").appendTo(container);

                                            var input = $("<input style='float:left;'/>").attr("name", "Properties." + elem).attr("type", "checkbox").appendTo(container);


                                        } else if (typeof (options.model.Properties[elem]) == "object") {
                                            var label = $("<label class='k-edit-label' style='width:60%; text-align:left;'>" + elem + " :</label>").appendTo(container);

                                            var input = $("<button  style='width:50px; height=70px; float: right;' class='k-button arrayButton k-icon k-i-grid-layout'></button>").attr("data-field", elem).appendTo(container);


                                        } else {
                                            var label = $("<label class='k-edit-label' style='width:60%; text-align:left;'>" + elem + ":</label>").appendTo(container);

                                            var input = $("<input class='k-input k-textbox' />").attr("name", "Properties." + elem).appendTo(container);

                                        }
                                    }
                                });
                            }
                        },
                        {
                            command: ["edit", "destroy"]
                        }],

                    dataSource: dataGrid,
                    scrollable: true,
                    selectable: true,
                    filterable: {
                        mode: "row"
                    },
                    toolbar: "<span><b>Shema & Custom & System</b></br><a class='k-button k-button-icontext k-grid-add' href='\\#'>addNew</a></span>",
                    editable: {
                        mode: "popup",

                    },
                    height: 600,


                }).data("kendoGrid");

                function propsPopup(data) {


                    $("<div id='propsPopupWindow'></div>")
                        .appendTo("body").kendoWindow({
                            height: 400,
                            minWidth: 200,
                            close: function (e) {
                                this.destroy();
                            }
                        }).data("kendoWindow").content(kendo.template($("#propsPopupWindowTemplate").html())).center().open();


                    var propertiesListData = new kendo.data.DataSource({
                        data: data,
                        autoSync: false,
                        schema: {
                            model: {
                                fields: {
                                    value: {
                                        validation: {
                                            required: true
                                        }
                                    }
                                }
                            }
                        }

                    });

                    var propertiesList = $("#propsContent").kendoListView({

                        dataSource: propertiesListData,
                        template: kendo.template($("#listPropsTemplate").html()),
                        editable: true,
                    }).data("kendoListView");




                    $("#propsContent").kendoSortable({
                        filter: ">div"
                    });


                    $("#controllButtons").on("click", function (e) {
                        var $t = $(e.target),
                            addButton = $t.closest(".k-update-button"),
                            cancelButton = $t.closest(".k-cancel-button"),
                            saveButton = $t.closest(".saveButton");


                        if (addButton.length) {
                            e.preventDefault();
                            if ($("#inputNewChoise").val()) {

                                propertiesList.dataSource.add({
                                    value: $("#inputNewChoise").val()
                                });
                                $("#inputNewChoise").val("");
                            }

                        }
                        if (cancelButton.length) {
                            e.preventDefault();
                            if ($("#inputNewChoise").val()) {
                                $("#inputNewChoise").val("");
                            }

                        }
                        if (saveButton.length) {
                            e.preventDefault();
                            console.log("save");
                            $("#propsPopupWindow").data("kendoWindow").close();
                        }

                    });
                };

                function prefixFilter(elem) {

                    elem.element.kendoDropDownList({
                        dataSource: prefixArr,
                        valuePrimitive: true,
                        optionLabel: "--Select Value--",
                    });
                };
            }
        });

    };
});