define(["resurces/source.js"], function (JSsource) {

    return function (formId) {

        var dataEditDesigner = JSsource.getDataFromId(formId);

        console.log(dataEditDesigner);
        var prefixArr = [];
        dataEditDesigner.forEach(function (elem, index, arr) {

            if (prefixArr.indexOf(elem.Prefix) < 0) {
                prefixArr.push(elem.Prefix);
            }

        });

        var controlls = JSsource.getControlFromId(formId),
            designerControlls = Object.keys(controlls);

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
        var dataListArr = [];

        for (var i = 0; i < 3; i++) {
            var data = new kendo.data.DataSource({
                data: selectedConrtoll,
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
                }
            });
            dataListArr.push(data);
        }


        var self = this;

        self.view = new kendo.View("editDesigner", {

            show: function () {


                self.dropDown = $("#controllsDropDown").kendoDropDownList({
                    dataSource: designerControlls,
                    optionLabel: "--Select controll--",
                    change: function (e) {
                        dataListArr.forEach(function (elem) {
                            elem.data([]);
                            console.log(elem);
                            $(".listToSave").data("kendoListView").refresh();
                        });
                        if (e.sender._old) {
                            if (typeof controlls[e.sender._old][0] == "string" || controlls[e.sender._old].length == 0) {
                                dataListArr[0].data(getSelectedConrtoll(controlls[e.sender._old]));
                            } else {
                                controlls[e.sender._old].forEach(function (controllArr, index) {
                                    dataListArr[index].data(getSelectedConrtoll(controllArr));
                                });
                            }
                        }
                    }
                });
                self.list = $("#list_propsToDrag").kendoListView({
                    editable: true,
                    dataSource: dataList,
                    selectable: true,
                    template: kendo.template($("#listTemplateProps").html())
                }).data("kendoListView");

                self.list2 = $("#list_propsToSave").kendoListView({
                    editable: true,
                    dataSource: dataListArr[0],
                    selectable: true,
                    template: kendo.template($("#listTemplate2").html()),
                    remove: function (e) {
                        dataList.add(e.model);
                    }
                }).data("kendoListView");

                self.list3 = $("#list_propsToSave_2").kendoListView({
                    editable: true,
                    dataSource: dataListArr[1],
                    selectable: true,
                    template: kendo.template($("#listTemplate2").html()),
                    remove: function (e) {

                        dataList.add(e.model);
                    }
                }).data("kendoListView");

                self.list4 = $("#list_propsToSave_3").kendoListView({
                    editable: true,
                    dataSource: dataListArr[2],
                    selectable: true,
                    template: kendo.template($("#listTemplate2").html()),
                    remove: function (e) {
                        dataList.add(e.model);
                    }
                }).data("kendoListView");

                $("#list_propsToDrag").kendoSortable({
                    filter: ">div",
                    connectWith: ".listToSave"
                });

                $(".listToSave").kendoSortable({
                    filter: ">div",
                    connectWith: ".listToSave",
                    change: function (e) {
                        var listIndex = $(".listToSave").index(this.element),
                            arrElems = $(e.sender.element).data("kendoSortable").items(),
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
            }
        });

    };
});