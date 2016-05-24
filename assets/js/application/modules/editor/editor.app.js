define([
    "application"
], function(Application) {
    Application.module("Editor", function(Editor, Application, Backbone, Marionette, $, _) {
        "use strict";

        Editor.Router = Marionette.AppRouter.extend({
            appRoutes : {
                "editor/edit/:id" : "editForm"
            }
        });

        var API = {
            editForm : function(id) {
                require([ "application/modules/editor/edit/edit.controller" ],
                    function(EditorEditController) {
                        EditorEditController.editForm(id);
                    });
            }
        };

        Application.addInitializer(function() {
            new Editor.Router({
                controller : API
            });
        });

    });

    return Application.Editor;
});
