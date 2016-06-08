define([
    "application"
], function(Application) {
    Application.module("Radio", function(Radio, Application, Backbone, Marionette, $, _) {
        "use strict";

        var API = {
        };

        Application.on("radio:new", function () {
            require(
                [
                    "application/modules/radio/radio/radio.view",
                    "application/entities/radio"
                ],
                function (RadioView) {
                    var entity      = Application.request("radio:entity:new");
                    var radioView   = new RadioView({ model : entity });
                    var options         = {
                        type : "radio",
                        view : radioView
                    };

                    Application.trigger("editor:engine:add", options);
                    radioView.on("show:controls", function (model) {
                        Application.trigger("radio:controls:show", model);
                    });

                    radioView.on("close:controls", function () {
                        Application.trigger("sidebar:close");
                    });
                });

        });

        Application.on("radio:controls:show", function (entity) {
            require(
                ["application/modules/radio/controls/radio.view"],
                function (RadioControlsView) {
                    var radioControlsView = new RadioControlsView({ model : entity });
                    Application.trigger("sidebar:display", radioControlsView);
                });

        });

    });

    return Application.Radio;
});
