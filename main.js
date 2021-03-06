require([
"text!templates.html",
"views/baseFieldsView.js",
"views/propertiesView.js",
"views/uniqPropertiesView.js",
"views/fieldTypeListView.js", 
"views/designersView.js",
"views/editDesignerView.js",
"views/editControlsList.js"
], function (Templates, BaseFieldsView, PropertiesView, UniqPropertiesView, FieldTypeListView, designersView, editDesignerView, editControlsListView) {
    var div = document.createElement('div');
    div.innerHTML = Templates;
    document.body.appendChild(div);
    // views, layouts
    var layout = new kendo.Layout("<header><a href='#/baseFields'><span>baseFields</span></a><a href='#/properties'><span>properties</span></a><a href='#/uniqProperties'><span>uniqProperties</span></a><a href='#/designers'><span>designers</span></a></header><section id='grid'></section><section id='forView'></section><footer></footer>");

    var baseFields = BaseFieldsView.view;

    var properties = PropertiesView.view;

    var designers = new designersView();

    designers.view.bind("editDesigner", function (e) {
        router.navigate("/editDesigner?formId=" + e.data);
    });
designers.view.bind("editControlsList", function (e) {
        router.navigate("/editControlsList?formId=" + e.data);
    });

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
        $("header").show();
        $("#forView").empty();
        $("#list").empty();
        $("#grid").empty();
        layout.showIn("#forView", designers.view);
        router.unbind("back");

    });
    router.route("/editDesigner", function (params) {

        $("header").hide();
        $("#forView").empty();
        $("#list").empty();
        $("#grid").empty();
        var editDesigner = new editDesignerView(params.formId);
        layout.showIn("#forView", editDesigner.view);
        router.bind("back", function (e) {
            e.preventDefault();
        });
    });
    router.route("/editControlsList", function (params) {
        $("header").hide();
        $("#forView").empty();
        $("#list").empty();
        $("#grid").empty();
        var editControlsList = new editControlsListView(params.formId);
        layout.showIn("#forView", editControlsList.view);
        router.bind("back", function (e) {
            e.preventDefault();
        });
    });

    $(function () {
        router.start();
    });
});