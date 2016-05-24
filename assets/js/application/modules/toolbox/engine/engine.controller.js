define([
    "application"
], function(Application) {
    Application.module("Toolbox.Engine", function(Engine, Application, Backbone, Marionette, $, _) {
        "use strict";

        Engine.Controller = {
            startEngine : function (options) {
                var self = this;
                require(
                    [ "application/modules/toolbox/engine/engine.view" ],
                    function(ToolboxEngineView) {
                        self.region = options.region;
                        self.view   = new ToolboxEngineView();
                        self.region.show(self.view);
                    }
                );
            }
        }
    });

    return Application.Toolbox.Engine.Controller;
});
