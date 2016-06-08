define([
    "application"
], function(Application) {
    Application.module("Toolbox", function(Toolbox, Application, Backbone, Marionette, $, _) {
        "use strict";

        var API = {
            start : function(options) {
                require(
                    [ "application/modules/toolbox/engine/engine.controller" ],
                    function(ToolboxController) {
                        ToolboxController.start(options);
                    }
                );
            }
        };

        Application.on("toolbox:start", function (options) {
            API.start(options);
        });

    });

    return Application.Toolbox;
});
