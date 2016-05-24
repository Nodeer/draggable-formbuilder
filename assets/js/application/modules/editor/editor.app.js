define([
    "application"
], function(Application) {
    Application.module("Editor", function(Editor, Application, Backbone, Marionette, $, _) {
        "use strict";

        Editor.Router = Marionette.AppRouter.extend({
            appRoutes : {
                "editor/edit/:id" : "openEditor"
            }
        });

        var API = {
            openEditor : function(id) {
                require([ "application/modules/editor/edit/edit.controller" ],
                    function(EditorEditController) {
                        EditorEditController.editForm(id);
                    });
            }
        };

        Application.on("editor:open", function (formId) {
            Application.navigate("editor/edit/" + formId, { "trigger" : "true" });
        });

        Application.on("editor:engine:start", function (options) {
        });

        Application.addInitializer(function() {
            new Editor.Router({
                controller : API
            });
        });

    });

    return Application.Editor;
});
