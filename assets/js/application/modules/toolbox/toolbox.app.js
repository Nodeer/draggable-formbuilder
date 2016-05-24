define([
    "application"
], function(Application) {
    Application.module("Toolbox", function(Toolbox, Application, Backbone, Marionette, $, _) {
        "use strict";

        var API = {
            startEngine : function(options) {
                require(
                    [ "application/modules/toolbox/engine/engine.controller" ],
                    function(ToolboxEngineController) {
                        ToolboxEngineController.startEngine(options);
                    }
                );
            }
        };

        Application.on("toolbox:start", function (options) {
            API.startEngine(options);
        });

    });

    return Application.Toolbox;
});
