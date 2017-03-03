define(["resurces/source.js"], function (JSsource) {



    var dataDesigners = JSsource.getDesignersArray();

    var designersDataSource = new kendo.data.DataSource({
        data: dataDesigners,
        autoSync: false,
        schema: {
            model: {
                fields: {
                    formId: {
                        validation: {
                            required: true
                        }
                    },
                    description: {
                        validation: {
                            required: true
                        }
                    }
                }
            }
        }
    });






    return function () {
        var self = this;
        self.view = new kendo.View("designers", {

            show: function () {
                this.grid = $("#grid_designers").kendoGrid({

                    columns: [
                        {
                            field: "formId",
                            title: "Designer ID"
                        },

                        {
                            field: "description",
                            title: "description"
                                },
                        {
                            command: [{
                                    name: "edit Designer",
                                    click: function (e) {
                                        e.preventDefault();
                                        var tr = $(e.target).closest("tr");
                                        var data = this.dataItem(tr);
                                        JSsource.getDataFromId(data.formId);
                                        self.view.trigger("editDesigner", {
                                            data: data.formId
                                        });

                                    }
                            },
                                {
                                    name: "edit Controls List",
                                    click: function (e) {
                                        e.preventDefault();
                                        var tr = $(e.target).closest("tr");
                                        var data = this.dataItem(tr);
                                        JSsource.getDataFromId(data.formId);
                                        self.view.trigger("editControlsList", {
                                            data: data.formId
                                        });

                                    }
                            }
                                     ]
                        }],
                    dataSource: designersDataSource,
                    height: 600,
                    scrollable: true,
                    selectable: true



                }).data("kendoGrid");
            }
        });
    }
});