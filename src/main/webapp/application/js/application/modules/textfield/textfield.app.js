define([
    "application"
], function(Application) {
    Application.module("TextField", function(TextField, Application, Backbone, Marionette, $, _) {
        "use strict";

        var API = {
            new : function() {
            }
        };

        Application.on("textfield:new", function () {
            require(
                [
                    "application/modules/textfield/textfield/textfield.view",
                    "application/entities/textfield"
                ],
                function (TextFieldView) {
                    var entity          = Application.request("textfield:entity:new");
                    var textFieldView   = new TextFieldView({ model : entity });
                    var options         = {
                        type : "textfield",
                        view : textFieldView
                    };

                    Application.trigger("editor:engine:add", options);
                    textFieldView.on("show:controls", function (model) {
                        Application.trigger("textfield:controls:show", model);
                    });

                    textFieldView.on("close:controls", function () {
                        Application.trigger("sidebar:close");
                    });
                });

        });

        Application.on("textfield:controls:show", function (entity) {
            require(
                ["application/modules/textfield/controls/textfield.view"],
                function (TextFieldControlsView) {
                    var textFieldControlsView = new TextFieldControlsView({ model : entity });
                    Application.trigger("sidebar:display", textFieldControlsView);
                });

        });

    });

    return Application.TextField;
});
