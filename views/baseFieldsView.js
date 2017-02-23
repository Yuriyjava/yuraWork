define(["resurces/controls.js"],function(JSControls){
    
    
     var controls = JSControls.controls;
    var typeArray = JSControls.typeArray;
    var databaseFields = controls.baseFields;
    
    var baseFieldsDataSource = new kendo.data.DataSource({
        data: databaseFields,
        autoSync: false,
        schema: {
            model: {
                id: "materialID",
                fields: {
                    field: {
                        validation: {
                            required: true
                        }
                    },
                    description: {
                        validation: {
                            required: true
                        }
                    },
                    type: {
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
    
    
    
    
    return{
  view: new kendo.View("baseFields", {
        show: function () {
            $("#grid_baseFields").kendoGrid({
                toolbar: ["create"],
                columns: [
                    {
                        field: "field",
                        title: "field",
                    },

                    {
                        field: "description",
                        title: "description"
                                },

                    {
                        field: "type",
                        title: "type",
                        editor: categoryDropDownEditor
                                },

                               ],
                dataSource: baseFieldsDataSource,
                height: 600,
                scrollable: true,
                editable: "popup"
            });
        }
    })
    }
});