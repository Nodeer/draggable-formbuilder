define([
    "application"
], function(Application) {
    Application.module("Toolbox.Engine", function(Engine, Application, Backbone, Marionette, $, _) {
        "use strict";

        Engine.Controller = {
            start : function (options) {

                var self = this;
                require(
                    [
                        "application/modules/toolbox/engine/engine.view",
                        "application/entities/tools"
                    ],
                    function(ToolboxView) {
                        var tools   = Application.request("tools:entities");
                        self.region = options.region;
                        self.view   = new ToolboxView({ collection : tools });

                        self.region.show(self.view);
                    }
                );
            }
        }
    });

    return Application.Toolbox.Engine.Controller;
});
