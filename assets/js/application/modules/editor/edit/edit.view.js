define([
    "application",
    "tpl!application/modules/editor/templates/edit/main_layout.tpl"
], function(Application, template) {
    Application.module("Editor.Edit", function(Edit, Application, Backbone, Marionette, $, _) {
        Edit.MainLayout = Marionette.LayoutView.extend({
            template    : template,
            regions     : {
                editorRegion   : "#editor-area",
                toolboxRegion  : "#toolbox-area"
            }
        });
    });

    return Application.Editor.Edit.MainLayout;
});
