define([
    "application"
], function(Application) {
    Application.module("Button", function(Button, Application, Backbone, Marionette, $, _) {
        "use strict";

        var API = {
            new : function() {
            }
        };

        Application.on("button:new", function () {
            require(
                [
                    "application/modules/button/button/button.view",
                    "application/entities/button"
                ],
                function (ButtonView) {
                    var entity      = Application.request("button:entity:new");
                    var buttonView  = new ButtonView({ model : entity });
                    var options     = {
                        type : "button",
                        view : buttonView
                    };

                    Application.trigger("editor:engine:add", options);
                    buttonView.on("show:controls", function (model) {
                        Application.trigger("button:controls:show", model);
                    });

                    buttonView.on("close:controls", function () {
                        Application.trigger("sidebar:close");
                        Application.trigger("editor:engine:delete", options);
                    });
            });

        });

        Application.on("button:controls:show", function (entity) {
            require(
                ["application/modules/button/controls/button.view"],
                function (ButtonControlsView) {
                    var buttonControlsView = new ButtonControlsView({ model : entity });
                    Application.trigger("sidebar:display", buttonControlsView);
                });

        });

    });

    return Application.Button;
});
