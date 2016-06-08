define([
    "application"
], function(Application) {
    Application.module("Checkbox", function(Checkbox, Application, Backbone, Marionette, $, _) {
        "use strict";

        var API = {
            new : function() {
            }
        };

        Application.on("checkbox:new", function () {
            require(
                [
                    "application/modules/checkbox/checkbox/checkbox.view",
                    "application/entities/checkbox"
                ],
                function (CheckboxView) {
                    var entity          = Application.request("checkbox:entity:new");
                    var checkboxView    = new CheckboxView({ model : entity });
                    var options         = {
                        type : "checkbox",
                        view : checkboxView
                    };

                    Application.trigger("editor:engine:add", options);
                    checkboxView.on("show:controls", function (model) {
                        Application.trigger("checkbox:controls:show", model);
                    });

                    checkboxView.on("close:controls", function () {
                        Application.trigger("sidebar:close");
                    });
                });
        });

        Application.on("checkbox:controls:show", function (entity) {
            require(
                ["application/modules/checkbox/controls/checkbox.view"],
                function (CheckboxControlsView) {
                    var checkboxControlsView = new CheckboxControlsView({ model : entity });
                    Application.trigger("sidebar:display", checkboxControlsView);
                });

        });

    });

    return Application.Checkbox;
});
