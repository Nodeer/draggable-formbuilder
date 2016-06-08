define([
    "application"
], function(Application) {
    Application.module("Editor.Sidebar", function(Sidebar, Application, Backbone, Marionette, $, _) {
        "use strict";

        Sidebar.Controller = {
            editForm: function(id) {

                require(
                    [
                        "application/modules/editor/edit/edit.view",
                        "application/entities/forms"
                    ],
                    function(EditorEditView) {
                        var editorLayout = new EditorEditView();
                        Application.mainRegion.show(editorLayout);

                        Application.trigger("sidebar:start",        { region : editorLayout.featuresRegion  });
                        Application.trigger("editor:engine:start",  { region : editorLayout.editorRegion    });
                        Application.trigger("toolbox:start",        { region : editorLayout.toolboxRegion   });
                    }
                );
            }
        }
    });

    return Application.Editor.Sidebar.Controller;
});
