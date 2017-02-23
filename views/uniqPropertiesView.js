define(["/resurces/controls.js"], function (JSControls) {

    var typeArray = JSControls.typeArray;

    var dataUniqProp = [];
    var uniqPropDataSource = new kendo.data.DataSource({
        data: dataUniqProp,
        autoSync: false,
        schema: {
            model: {

                fields: {
                    field: {
                        validation: {
                            required: true
                        }
                    },
                    description: {
                        defaultValue: "",
                        validation: {
                            required: true
                        }
                    },
                    type: {
                        defaultValue: "string",
                        validation: {
                            required: true
                        }
                    }
                }
            }
        }
    });

    function categoryDropDownEditor(container, options) {
        $('<input required name="' + options.field + '"/>').appendTo(container).kendoComboBox({
            dataSource: typeArray,
            clearButton: false
        });
    }



    return function (fieldTypeList) {
        var self = this;
        console.log(fieldTypeList);

        self.view = new kendo.View("uniqProperties", {
            show: function () {
                this.grid = $("#grid_uniqProperties").kendoGrid({
                    toolbar: [{
                            name: "create",
                            text: "add new property"
                                                    },
                                                      "save"],
                    columns: [{
                            field: "field",
                            title: "field"
                                            },
                        {
                            field: "description",
                            title: "description"
                                                        },
                        {
                            field: "type",
                            title: "type",
                            editor: categoryDropDownEditor
                                                        }
                                                        , {
                            command: ["edit", "destroy"]
                                                        }
                                                       ],
                    dataSource: uniqPropDataSource,
                    height: 600,
                    scrollable: true,
                    editable: {
                        mode: "popup",
                        confirmation: true,
                        confirmDelete: "Yes",
                        cancelDelete: "No"
                    },
                    save: function (e) {
                        var typeToAdd = fieldTypeList.list.select().find("dd").text();
                        if (typeToAdd == "") {
                            e.preventDefault();
                            kendo.alert("choose fildType first");
                        } else {
                            var observable = new kendo.data.ObservableObject(self.view.grid.dataSource.data());
                            var newProp = observable.toJSON();
                            addPropeties(typeToAdd, newProp);
                        }
                    },
                    saveChanges: function (e) {
                        var typeToAdd = fieldTypeList.list.select().find("dd").text();
                        var observable = new kendo.data.ObservableObject(self.view.grid.dataSource.data());
                        var newProp = observable.toJSON();
                        console.log(newProp);
                        addPropeties(typeToAdd, newProp);

                    }
                }).data("kendoGrid");
            }
        })

    }
});