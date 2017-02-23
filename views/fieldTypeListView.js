define(["modules/props.js"], function (JSprops) {

    return function (config) {

        var data = getFieldTypeList();
        var self = this;

        self.view = new kendo.View("fieldTypeList", {
            show: function () {
                
                self.list = $("#fieldType_list").kendoListView({
                    editable: true,
                    dataSource: data,
                    selectable: true,
                    template: kendo.template($("#listTemplate").html()),
                    editTemplate: kendo.template($("#listEditTemplate").html()),
                    change: function (e) {
                        dataUniqProp = getUniqProps($(this.select()).find("dd").text()).Properties;
                        config && config.change && config.change({
                            data: dataUniqProp
                        });
                    }
                }).data("kendoListView");
               
                $(".k-add-button").off();
                $(".k-add-button").click(function (e) {
                    e.preventDefault();
                    self.list.add();
                    
                });

            },
             hide: function() {
                 self.list.destroy(); 
                     }
        });




    }


});