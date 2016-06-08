define([
    "application"
], function(Application) {
    Application.module("Editor.Edit", function(Edit, Application, Backbone, Marionette, $, _) {
        "use strict";

        Edit.Controller = {
            editForm: function(id) {

                require(
                    [
                        "application/modules/editor/edit/edit.view",
                        "application/entities/forms"
                    ],
                    function(EditorEditView) {
                        var editorLayout = new EditorEditView();
                        Application.mainRegion.show(editorLayout);

                        Application.trigger("editor:engine:start",  { form_id : id, region : editorLayout.editorRegion    });
                        Application.trigger("sidebar:start",        { region : editorLayout.featuresRegion  });
                        Application.trigger("toolbox:start",        { region : editorLayout.toolboxRegion   });
                    }
                );
            }
        }
    });

    return Application.Editor.Edit.Controller;
});
