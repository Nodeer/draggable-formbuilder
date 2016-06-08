define([
    "application",
    "tpl!application/modules/editor/templates/edit/main_layout.tpl"
], function(Application, template) {
    Application.module("Editor.Edit", function(Edit, Application, Backbone, Marionette, $, _) {
        "use strict";

        Edit.MainLayout = Marionette.LayoutView.extend({
            template    : template,
            regions     : {
                editorRegion   : "#forms-editor-area",
                toolboxRegion  : "#forms-toolbox-area",
                featuresRegion : "#forms-features-area"
            }
        });
    });

    return Application.Editor.Edit.MainLayout;
});
