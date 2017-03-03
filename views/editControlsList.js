define(["resurces/source.js", "modules/props.js", "resurces/controls.js"],
    function (JSsource, JSprops, JSControls) {
        return function (formId) {
            JSprops.init();
            var dataEditDesigner = JSsource.getDataFromId(formId),
                fieldTypeData    = JSprops.getFieldTypeList(),
                baseFields       = JSControls.controls.baseFields,
                baseProperties   = JSControls.controls.baseProperties,
                prefixArr        = [],
                fieldTypeList    = [];

            fieldTypeData.forEach(function (elem) {
                if (fieldTypeList.indexOf(elem.name) < 0) {
                    fieldTypeList.push(elem.name);
                }
            });
            dataEditDesigner.forEach(function (elem) {

                if (prefixArr.indexOf(elem.Prefix) < 0) {
                    prefixArr.push(elem.Prefix);
                }

            });

            var dataGrid = new kendo.data.DataSource({
                data     : dataEditDesigner,
                autoSync : false,
                schema   : {
                    model : {
                        id     : "FieldId",
                        fields : {
                            FieldId    : {
                                validation : {
                                    required : true
                                }
                            },
                            FieldName  : {
                                validation : {
                                    required : true
                                }
                            },
                            FieldType  : {
                                validation : {
                                    required : true
                                }
                            },
                            Prefix     : {
                                validation : {
                                    required : true
                                }
                            },
                            Fixed      : {
                                type : "boolean"
                            },
                            Properties : {
                                defaultValue : {}
                            }
                        }
                    }
                }


            });

            var self = this;

            self.view = new kendo.View("editControlsList", {

                show             : function () {
                    self.grid = $("#gridProps").kendoGrid({

                        columns : [
                            {
                                field      : "FieldId",
                                title      : "Field Id",
                                filterable : {
                                    mode : "row"
                                }
                            },

                            {
                                field : "FieldName",
                                title : "Field Name"

                            },
                            {
                                field : "FieldType",
                                title : "Field Type"
                            },
                            {
                                field      : "Prefix",
                                title      : "Prefix",
                                filterable : {
                                    cell : {
                                        template      : function (elem) {
                                            prefixFilter(elem, prefixArr)
                                        },
                                        showOperators : false
                                    }
                                }
                            },
                            {
                                field : "Fixed",
                                title : "Fixed"
                            },
                            {
                                field  : "Properties",
                                hidden : true

                            },
                            {
                                command : ["edit", "destroy"]
                            }],

                        dataSource : dataGrid,
                        scrollable : true,
                        selectable : true,
                        filterable : {
                            mode : "row"
                        },
                        toolbar    : "<span><b>Shema & Custom & System</b></br><a class='k-button k-button-icontext k-grid-add' href='\\#'>addNew</a></span>",
                        editable   : {
                            mode : "popup"

                        },
                        height     : 600,
                        edit       : function (e) {

                            e.model.bind("change", function (data) {

                                data.field === "FieldType" && bind();

                            });

                            var bind = function () {

                                e.container.html(generateTemplate(e.model, e.model.isNew(), baseFields, baseProperties, fieldTypeList));
                                e.container.css("min-width", "400px");
                                kendo.unbind(e.container, e.model);
                                kendo.bind(e.container, e.model);
                                $(e.container).on("click", function (event) {
                                    var $t        = $(event.target),
                                        arrButton = $t.closest(".arrayButton"),
                                        arrField  = arrButton.length && arrButton.attr("data-field");
                                    if (arrButton.length) {
                                        propsPopup(e.model.Properties[arrField]);
                                    }
                                });
                            };
                            bind();
                        }

                    }).data("kendoGrid");


                },
                init             : function () {
                    console.log(self.view.element);
                    $(self.view.element).on("click", function (event) {
                        console.log("click")
                        var $t              = $(event.target),
                            arrSaveButton   = $t.closest(".saveButton"),
                            arrCancelButton = $t.closest(".cancelButton");
                        if (arrSaveButton.length) {
                            console.log("save");
                        } else if (arrCancelButton.length) {
                            console.log("exit");
                        }

                    });
                },
                generateTemplate : generateTemplate,
                propsPopup       : propsPopup,
                prefixFilter     : prefixFilter

            });

        };
        function generateTemplate(objModel, isNew, baseFields, baseProperties, fieldTypeList) {


            var docFragment   = document.createDocumentFragment(),
                templates     = {
                    "object"   : $("#objectTemplate").html(),
                    "boolean"  : $("#booleanTemplate").html(),
                    "string"   : $("#stringTemplate").html(),
                    "number"   : $("#numberTemplate").html(),
                    "dropDown" : $("#dropDownTemplate").html()
                },
                fieldTemplArr = [].concat(baseFields),
                propsTemplArr = [].concat(baseProperties),
                pr            = objModel["FieldType"] ? JSprops.getUniqProps(objModel["FieldType"]).Properties : [],
                buttons       = new kendo.template($("#buttonsBlock").html());
            propsTemplArr = propsTemplArr.concat(pr),
                $(docFragment).append(buttons);
            fieldTemplArr.forEach(function (prop) {
                if (prop.field !== "Properties") {
                    var tpl  = prop.field === "FieldType" ? templates.dropDown : templates[prop.type],
                        html = kendo.template(tpl)({
                            prefix   : "",
                            config   : prop,
                            disabled : !isNew,
                            list     : fieldTypeList
                        });

                    $(docFragment).append($(html));
                } else {
                    $(docFragment).append("<div style=' max-height:200px; overflow:auto'><b>Properties:</b></div>");
                    var div = $("<div style='float: left; min-width:300px;max-height:200px; overflow:auto'></div>");
                    propsTemplArr.forEach(function (prop) {
                        var tpl  = prop.field === "FieldType" ? templates.dropDown : templates[prop.type],
                            html = kendo.template(tpl)({
                                prefix   : "Properties.",
                                config   : prop,
                                disabled : !isNew,
                                list     : fieldTypeList
                            });

                        $(div).append($(html));


                    });
                    $(docFragment).append(div)
                }
            });

            return docFragment;
        }

        function propsPopup(data) {
            $("<div id='propsPopupWindow'></div>")
                .appendTo("body").kendoWindow({
                height   : 400,
                minWidth : 200,
                close    : function (e) {
                    this.destroy();
                }
            }).data("kendoWindow").content(kendo.template($("#propsPopupWindowTemplate").html())).center().open();


            var propertiesListData = new kendo.data.DataSource({
                data     : data,
                autoSync : false,
                schema   : {
                    model : {
                        fields : {
                            value : {
                                validation : {
                                    required : true
                                }
                            }
                        }
                    }
                }

            });

            //noinspection JSJQueryEfficiency
            var propertiesList = $("#propsContent").kendoListView({

                dataSource : propertiesListData,
                template   : kendo.template($("#listPropsTemplate").html()),
                editable   : true
            }).data("kendoListView");


            //noinspection JSJQueryEfficiency
            $("#propsContent").kendoSortable({
                filter : ">div"
            });


            $("#controllButtons").on("click", function (e) {
                var $t           = $(e.target),
                    addButton    = $t.closest(".k-update-button"),
                    cancelButton = $t.closest(".k-cancel-button"),
                    saveButton   = $t.closest(".saveButton");


                if (addButton.length) {
                    e.preventDefault();
                    //noinspection JSJQueryEfficiency
                    if ($("#inputNewChoise").val()) {

                        //noinspection JSJQueryEfficiency
                        propertiesList.dataSource.add({
                            value : $("#inputNewChoise").val()
                        });
                        //noinspection JSJQueryEfficiency
                        $("#inputNewChoise").val("");
                    }

                }
                if (cancelButton.length) {
                    e.preventDefault();
                    //noinspection JSJQueryEfficiency
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
        }

        function prefixFilter(elem, prefixArr) {

            elem.element.kendoDropDownList({
                dataSource     : prefixArr,
                valuePrimitive : true,
                optionLabel    : "--Select Value--"
            });
        }
    });