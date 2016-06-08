define([
    "application"
], function(Application) {
    Application.module("Editor.Engine", function(Engine, Application, Backbone, Marionette, $, _) {
        "use strict";

        Engine.Controller = {
            startEngine : function(options) {
                var self = this;
                require(
                    [ "application/modules/editor/engine/engine.view" ],
                    function(EngineView) {
                        var entity = Application.request("forms:entity", options.form_id);
                        var engineView = new EngineView({ model : entity });

                        self.region = options.region;
                        self.region.show(engineView);

                        engineView.on("forms:save", function (data) {
                            if ( !entity.save(data) ) {
                                console.log("There was an error to save vocabulary.");
                                // engineView.onError(entity.validationError);
                            }
                        });

                        Application.on("editor:engine:add", function (options) {
                            engineView.addComponent(options);
                         });

                        Application.on("editor:engine:delete", function (options) {
                            engineView.deleteComponent(options);
                        });
                    }
                );
            }
        }
    });

    return Application.Editor.Engine.Controller;
});
