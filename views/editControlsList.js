define(["resurces/source.js", "modules/props.js", "resurces/controls.js"],
    function (JSsource, JSprops, JSControls) {
        return function (formId) {
            JSprops.init();
            var dataEditDesigner = JSsource.getDataFromId(formId),
                fieldTypeData = JSprops.getFieldTypeList(),
                baseFields = JSControls.controls.baseFields,
                baseProperties = JSControls.controls.baseProperties,
                prefixArr = [],
                fieldTypeList = [];

            fieldTypeData.forEach(function (elem) {
                if (fieldTypeList.indexOf(elem.name) < 0) {
                    fieldTypeList.push(elem.name);
                }
            });



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
                            Properties: {
                                defaultValue: {}
                            }
                        }
                    }
                },


            });

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
                        edit: function (e) {

                            e.model.bind("change", function (data) {

                                data.field === "FieldType" && bind();

                            });

                            var bind = function () {

                                e.container.html(generateTemplate(e.model, e.model.isNew()));
                                e.container.css("min-width", "400px");
                                kendo.unbind(e.container, e.model);
                                kendo.bind(e.container, e.model);
                                $(e.container).on("click", function (event) {
                                    var $t = $(event.target),
                                        arrButton = $t.closest(".arrayButton"),
                                        arrField = arrButton.length && arrButton.attr("data-field");
                                    if (arrButton.length) {
                                        console.log(e.model);
                                        console.log(e.model.Properties.Choices)
                                        console.log(arrField);
                                        propsPopup(e.model.Properties[arrField]);
                                    }
                                });
                            }
                            bind();
                        }

                    }).data("kendoGrid");

                    function generateTemplate(objModel, isNew) {


                        var docFragment = document.createDocumentFragment(),
                            templates = {
                                "object": $("#objectTemplate").html(),
                                "boolean": $("#booleanTemplate").html(),
                                "string": $("#stringTemplate").html(),
                                "number": $("#numberTemplate").html(),
                                "dropDown": $("#dropDownTemplate").html()
                            },
                            propsTemplArr = [].concat(baseProperties),
                            pr = objModel["FieldType"] ? JSprops.getUniqProps(objModel["FieldType"]).Properties : [],
                            fieldTemplArr = [].concat(baseFields);
                        propsTemplArr = propsTemplArr.concat(pr);

                        fieldTemplArr.forEach(function (prop) {
                            if (prop.field !== "Properties") {
                                var tpl = prop.field === "FieldType" ? templates.dropDown : templates[prop.type],
                                    html = kendo.template(tpl)({
                                        prefix: "",
                                        config: prop,
                                        disabled: !isNew,
                                        list: fieldTypeList
                                    });

                                $(docFragment).append($(html));
                            } else {
                                $(docFragment).append("<div style=' max-height:200px; overflow:auto'><b>Properties:</b></div>");
                                var div = $("<div style='float: left; min-width:300px;max-height:200px; overflow:auto'></div>");
                                propsTemplArr.forEach(function (prop) {
                                    var tpl = prop.field === "FieldType" ? templates.dropDown : templates[prop.type],
                                        html = kendo.template(tpl)({
                                            prefix: "Properties.",
                                            config: prop,
                                            disabled: !isNew,
                                            list: fieldTypeList
                                        });

                                    $(div).append($(html));


                                });
                                $(docFragment).append(div)
                            }
                        });

                        return docFragment;

                        /*    Object.keys(objModel).forEach(function (elem) {
                              if (!elem.startsWith("_") && elem != "uid" && elem != "parent") {
                                  var label = $("<label class='k-edit-label' style='width:60%; text-align:left;'>" + elem + " :</label></br>").appendTo(docFragment);
                                  switch (elem) {

                                  case "FieldType":
                                      {
                                          if (!isNew) {
                                              var input = $("<input class='k-input k-textbox' name='FieldType' disabled/>").appendTo(docFragment).css("background-color", "gray");
                                          } else {
                                              $("<input class='k-input k-textbox' name='FieldType' disabled/>").appendTo(docFragment).kendoDropDownList({
                                                  dataSource: fieldTypeList,
                                                  valuePrimitive: true,
                                                  optionLabel: "--Select Value--",
                                                  template: '<span>#: name #</span>',
                                                  valueTemplate: '<span>#: name #</span>'
                                              });
                                          };
                                          break;
                                      }
                                  case "Properties":
                                      {
                                          var propsFragment = generateProperties(objModel[elem]);
                                          $(propsFragment).appendTo(docFragment);
                                          break;
                                      }
                                  default:
                                      {
                                          if (typeof (objModel[elem]) === "boolean") {
                                              var input = $("<input style='float:left;'/>").attr("name", elem).attr("type", "checkbox").appendTo(docFragment);
                                          } else {
                                              var input = $("<input class='k-input k-textbox'/>").attr("name", elem).appendTo(docFragment);
                                          }
                                      }
                                  }
                              }
                          });
                          return docFragment;*/
                    };







                    function generateProperties(options) {
                        var container = document.createDocumentFragment();
                        $(container).css("max-height", "200px");
                        $(container).css("overflow", "auto");
                        $(container).on("click", function (e) {
                            var $t = $(e.target),
                                arrButton = $t.closest(".arrayButton"),
                                arrField = arrButton.length && arrButton.attr("data-field");
                            if (arrButton.length) {

                                propsPopup(options[arrField]);
                            }
                        });
                        options && Object.keys(options).forEach(function (elem) {

                            if (!elem.startsWith("_") && elem != "uid" && elem != "parent") {

                                var label = $("<label class='k-edit-label' style='width:60%; text-align:left;'>" + elem + ":</label>").appendTo(container);
                                switch (typeof (options[elem])) {
                                case "object":
                                    {
                                        var input = $("<button  style='width:50px; height=70px; float: right;' class='k-button arrayButton k-icon k-i-grid-layout'></button>").attr("data-field", elem).appendTo(container);
                                        break;
                                    }
                                case "boolean":
                                    {
                                        var input = $("<input style='float:left;'/>").attr("name", "Properties." + elem).attr("type", "checkbox").appendTo(container);
                                        break;
                                    }
                                default:
                                    {
                                        var input = $("<input class='k-input k-textbox'/>").attr("name", "Properties." + elem).appendTo(container);
                                    }
                                };

                            };

                        });

                        return container;
                    }


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