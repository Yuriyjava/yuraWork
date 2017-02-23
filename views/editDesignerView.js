define(["resurces/source.js"], function (JSsource) {

    return function (formId) {

        var dataEditDesigner = JSsource.getDataFromId(formId);

        var prefixArr = [];
        dataEditDesigner.forEach(function (elem, index, arr) {

            if (prefixArr.indexOf(elem.Prefix) < 0) {
                prefixArr.push(elem.Prefix);
            }

        });

        var conroll = JSsource.getControlFromId(formId),
            editorControll = [],
            editorControllNumbers = 1;

        Object.keys(conroll).forEach(function (elem) {

            if (conroll[elem].length) {

                editorControll = conroll[elem];
                if (typeof conroll[elem][0] != "string") {
                    editorControllNumbers = conroll[elem].length;

                }
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
                        }
                    }
                }
            },
            change: function (e) {
                if (!e.action) {
                    dataList.data = dataGrid.data;
                };
            },

        });


        var dataList = new kendo.data.DataSource({
            data: dataEditDesigner,
            autoSync: false,
            schema: {
                model: {

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
                            validation: {
                                required: true
                            }
                        }
                    }
                }
            },
        });

        var designerConrtolls = [];
        if (editorControllNumbers == 1) {
            editorControll.forEach(function (controllElem) {
                dataEditDesigner.forEach(function (elem) {
                    if (elem.FieldId == controllElem) {
                        designerConrtolls.push(elem);
                    }

                });

            });

        }
        var dataList2 = new kendo.data.DataSource({
            data: designerConrtolls,
            autoSync: false,
            schema: {
                model: {
                    id: "MyIdField",
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
                            validation: {
                                required: true
                            }
                        }
                    }
                }
            },
        });

        var self = this;



        self.view = new kendo.View("editDesigner", {

            show: function () {
                this.grid = $("#gridProps").kendoGrid({

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
                            title: "Fixed"

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
                                Object.keys(options.model.Properties).forEach(function (elem) {

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
                        // tempate: kendo.template($("#popup-editor").html())
                    },
                    height: 400,


                }).data("kendoGrid");

                function propsPopup(data) {

                    console.log(data);
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
                    var citiesRedefined = prefixArr;
                    elem.element.kendoDropDownList({
                        dataSource: citiesRedefined,
                        valuePrimitive: true,
                        optionLabel: "--Select Value--",

                    });

                };


                this.list = $("#list_propsToDrag").kendoListView({
                    editable: true,
                    dataSource: dataList,
                    selectable: true,
                    template: kendo.template($("#listTemplateProps").html()),
                }).data("kendoListView");

                this.list2 = $("#list_propsToSave").kendoListView({
                    editable: true,
                    dataSource: dataList2,
                    selectable: true,
                    template: kendo.template($("#listTemplate2").html()),


                }).data("kendoListView");

                $("#list_propsToDrag").kendoSortable({
                    filter: ">div",
                    connectWith: "#list_propsToSave",

                });


                $("#list_propsToSave").kendoSortable({
                    filter: ">div",

                    change: function (e) {
                        console.log(e);
                        if (e.action != "sort") {
                            var newIndex = e.newIndex,
                                dataItem = dataList.getByUid(e.item.data("uid"));
                            dataList2.insert(newIndex, dataItem);

                        } else {
                            var newIndex = e.newIndex,
                                dataItem = dataList2.getByUid(e.item.data("uid"));
                            dataList2.remove(dataItem);
                            dataList2.insert(newIndex, dataItem);
                        }

                    }
                });
            }
        });

    };
});