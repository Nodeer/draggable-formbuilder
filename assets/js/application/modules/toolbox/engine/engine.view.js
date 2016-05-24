define([
    "application",
    "tpl!application/modules/toolbox/templates/engine/main_layout.tpl"
], function(Application, template) {
    Application.module("Toolbox.Engine", function(Engine, Application, Backbone, Marionette, $, _) {
        Engine.MainLayout = Marionette.LayoutView.extend({
            template    : template,
            regions     : {
            }
        });
    });

    return Application.Toolbox.Engine.MainLayout;
});
