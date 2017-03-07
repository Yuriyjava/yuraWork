define(["resurces/source.js"], function (JSsource) {

    return function (formId) {

        var dataEditDesigner  = JSsource.getDataFromId(formId),
            oldControls       = JSsource.getControlFromId(formId),
            controlls         = oldControls,
            designerControlls = Object.keys(controlls),
            newControls       = {};

        designerControlls.forEach(function (contr) {
            newControls[contr] = [];
        });
        var dataList = new kendo.data.DataSource({
            data     : dataEditDesigner,
            autoSync : false,
            schema   : {
                model : {

                    fields : {

                        FieldId   : {
                            validation : {
                                required : true
                            }
                        },
                        FieldName : {
                            validation : {
                                required : true
                            }
                        },
                        FieldType : {
                            validation : {
                                required : true
                            }
                        },
                        Prefix    : {
                            validation : {
                                required : true
                            }
                        },
                        Fixed     : {
                            validation : {
                                required : true
                            }
                        }
                    }
                }
            }
        });


        function getSelectedConrtoll(controllArr) {
            var arrConrtoll = [];
            controllArr.forEach(function (controllElem) {
                dataEditDesigner.forEach(function (elem) {
                    if (elem.FieldId == controllElem) {
                        arrConrtoll.push(elem);
                    }
                });
            });
            return arrConrtoll;

        }

        var selectedConrtoll = [];
        var dataListArr      = [];

        for (var i = 0; i < 3; i++) {
            var data = new kendo.data.DataSource({
                data     : selectedConrtoll,
                autoSync : false,
                schema   : {
                    model : {
                        id     : "MyIdField",
                        fields : {

                            FieldId   : {
                                validation : {
                                    required : true
                                }
                            },
                            FieldName : {
                                validation : {
                                    required : true
                                }
                            },
                            FieldType : {
                                validation : {
                                    required : true
                                }
                            },
                            Prefix    : {
                                validation : {
                                    required : true
                                }
                            },
                            Fixed     : {
                                validation : {
                                    required : true
                                }
                            }
                        }
                    }
                }
            });
            dataListArr.push(data);
        }


        var self = this;

        self.view = new kendo.View("editDesigner", {

            show : function () {


                self.dropDown = $("#controllsDropDown").kendoDropDownList({
                    dataSource  : designerControlls,
                    optionLabel : "--Select controll--",
                    select      : function (e) {
                        if (e.sender._old) {
                            var newArr = [];
                            var i      = 0;
                            dataListArr.forEach(function (contrArr) {
                                var dataContr = contrArr.data();
                                if (dataContr.length > 0) {
                                    newArr.push([]);
                                    dataContr.forEach(function (contr) {
                                        newArr[i].push(contr.FieldId);
                                    });
                                }
                                i += 1;
                            });
                            if (!newArr[1] || newArr[1].length === 0 && newArr[2].length === 0) {
                                newControls[e.sender._old] = newArr[0] ? newArr[0] : [];
                            } else {
                                newControls[e.sender._old] = newArr;
                            }
                        }

                        console.log(newControls);
                        controlls[e.sender._old] = newControls[e.sender._old];
                    },

                    change : function (e) {
                        var value = self.dropDown.value();
                        dataListArr.forEach(function (elem) {
                            elem.data([]);
                            $(".listToSave").data("kendoListView").refresh();
                        });
                        if (value) {
                            if (typeof controlls[value][0] == "string" || controlls[value].length == 0) {
                                dataListArr[0].data(getSelectedConrtoll(controlls[value]));
                            } else {
                                controlls[value].forEach(function (controllArr, index) {
                                    dataListArr[index].data(getSelectedConrtoll(controllArr));
                                });
                            }
                        }
                    }
                }).data("kendoDropDownList");

                self.list = $("#list_propsToDrag").kendoListView({
                    editable   : true,
                    dataSource : dataList,
                    selectable : true,
                    template   : kendo.template($("#listTemplateProps").html())
                }).data("kendoListView");

                self.list2 = $("#list_propsToSave").kendoListView({
                    editable   : true,
                    dataSource : dataListArr[0],
                    selectable : true,
                    template   : kendo.template($("#listTemplate2").html()),
                    remove     : function (e) {
                        dataList.add(e.model);
                    }
                }).data("kendoListView");

                self.list3 = $("#list_propsToSave_2").kendoListView({
                    editable   : true,
                    dataSource : dataListArr[1],
                    selectable : true,
                    template   : kendo.template($("#listTemplate2").html()),
                    remove     : function (e) {

                        dataList.add(e.model);
                    }
                }).data("kendoListView");

                self.list4 = $("#list_propsToSave_3").kendoListView({
                    editable   : true,
                    dataSource : dataListArr[2],
                    selectable : true,
                    template   : kendo.template($("#listTemplate2").html()),
                    remove     : function (e) {
                        dataList.add(e.model);
                    }
                }).data("kendoListView");

                $("#list_propsToDrag").kendoSortable({
                    filter      : ">div",
                    connectWith : ".listToSave"
                });

                $(".listToSave").kendoSortable({
                    filter      : ">div",
                    connectWith : ".listToSave",
                    change      : function (e) {
                        var listIndex        = $(".listToSave").index(this.element),
                            arrElems         = $(e.sender.element).data("kendoSortable").items(),
                            arrControlsElems = [];

                        for (var i = 0; i < arrElems.length; i++) {
                            dataEditDesigner.forEach(function (elem) {
                                var splitArr = arrElems[i].outerText.split(", ");
                                if (elem.FieldId == splitArr[0] && elem.Prefix == splitArr[2]) {
                                    arrControlsElems.push(elem);
                                }
                            });
                        }
                        dataListArr[listIndex].data(arrControlsElems);
                    }
                });
            },
            init : function () {

                $(self.view.element).on("click", function (event) {

                    var $t              = $(event.target),
                        arrSaveButton   = $t.closest(".saveButton"),
                        arrCancelButton = $t.closest(".cancelButton");
                    event.preventDefault();
                    if (arrSaveButton.length) {

                        $('<div></div>').appendTo($("body")).kendoConfirm({
                            content  : "Save changes and exit?",
                            messages : {
                                okText : "OK"
                            }
                        }).data("kendoConfirm").result.done(function () {
                            var value = self.dropDown.value();
                            if (value) {
                                var newArr = [];
                                var i      = 0;
                                dataListArr.forEach(function (contrArr) {
                                    var dataContr = contrArr.data();
                                    if (dataContr.length > 0) {
                                        newArr.push([]);
                                        dataContr.forEach(function (contr) {
                                            newArr[i].push(contr.FieldId);
                                        });
                                    }
                                    i += 1;
                                });
                                if (!newArr[1] || newArr[1].length === 0 && newArr[2].length === 0) {
                                    newControls[value] = newArr[0] ? newArr[0] : [];
                                } else {
                                    newControls[value] = newArr;
                                }
                            }
                            controlls[value] = newControls[value];
                            JSsource.setControlFromId(newControls, formId);
                            document.location.href = '#/designers';
                        });


                    } else if (arrCancelButton.length) {

                        $('<div></div>').appendTo($("body")).kendoConfirm({
                            content  : "Do you accept exit without changes?",
                            messages : {
                                okText : "OK"
                            }
                        }).data("kendoConfirm").result.done(function () {
                            JSsource.setControlFromId(oldControls, formId);

                            document.location.href = '#/designers';
                        });

                    }

                });
            }
        });

    };
});