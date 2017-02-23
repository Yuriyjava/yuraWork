require([
"text!templates.html",
"views/baseFieldsView.js",
"views/propertiesView.js",
"views/uniqPropertiesView.js",
"views/fieldTypeListView.js",
    "views/designersView.js",
"views/editDesignerView.js"
], function (Templates, BaseFieldsView, PropertiesView, UniqPropertiesView, FieldTypeListView, designersView, editDesignerView) {
    var div = document.createElement('div');
    div.innerHTML = Templates;
    document.body.appendChild(div);
    // views, layouts
    var layout = new kendo.Layout("<header><a href='#/baseFields'><span>baseFields</span></a><a href='#/properties'><span>properties</span></a><a href='#/uniqProperties'><span>uniqProperties</span></a><a href='#/designers'><span>designers</span></a></header><section id='grid'></section><section id='forView'></section><footer></footer>");

    var baseFields = BaseFieldsView.view;

    var properties = PropertiesView.view;

    var designers = new designersView();

    designers.view.bind("edit", function (e) {
        router.navigate("/editDesigner?formId=" + e.data);
    })


    var fieldTypeList = new FieldTypeListView({
        change: function (o) {
            uniqProperties.view.grid.dataSource.data(o.data);
        }
    });

    var uniqProperties = new UniqPropertiesView(fieldTypeList);
    // routing
    var router = new kendo.Router();
    router.bind("init", function () {
        layout.render($("#app"));
        router.navigate("/baseFields");
    });

    router.route("/baseFields", function () {
        $("#forView").empty();
        $("#list").empty();
        $("#grid").empty();
        layout.showIn("#grid", baseFields);

    });
    router.route("/properties", function () {
       $("#forView").empty();
        $("#list").empty();
        $("#grid").empty();
        layout.showIn("#grid", properties);

    });
    router.route("/uniqProperties", function () {
        $("#forView").empty();
         $("#grid").empty();
        layout.showIn("#grid", uniqProperties.view);
        $("#list").empty();
        kendo.destroy($("#list"));
        layout.showIn("#list", fieldTypeList.view);
    });
    router.route("/designers", function () {
      $("#forView").empty();
        $("#list").empty();
        $("#grid").empty();
        layout.showIn("#forView", designers.view);

    });
    router.route("/editDesigner", function (params) {
        $("#forView").empty();
        $("#list").empty();
        $("#grid").empty();
        var editDesigner = new editDesignerView(params.formId);
        layout.showIn("#forView", editDesigner.view);

    });

    $(function () {
        router.start();
    });
});