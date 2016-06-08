define([
    "application"
], function(Application) {
    Application.module("TextArea", function(TextArea, Application, Backbone, Marionette, $, _) {
        "use strict";

        var API = {
        };

        Application.on("textarea:new", function () {
            require(
                [
                    "application/modules/textarea/textarea/textarea.view",
                    "application/entities/textarea"
                ],
                function (TextAreaView) {
                    var entity          = Application.request("textarea:entity:new");
                    var textAreaView    = new TextAreaView({ model : entity });
                    var options         = {
                        type : "textarea",
                        view : textAreaView
                    };

                    Application.trigger("editor:engine:add", options);
                    textAreaView.on("show:controls", function (model) {
                        Application.trigger("textarea:controls:show", model);
                    });

                    textAreaView.on("close:controls", function () {
                        Application.trigger("sidebar:close");
                    });
                });
        });

        Application.on("textarea:controls:show", function (entity) {
            require(
                ["application/modules/textarea/controls/textarea.view"],
                function (TextAreaControlsView) {
                    var textAreaControlsView = new TextAreaControlsView({ model : entity });
                    Application.trigger("sidebar:display", textAreaControlsView);
                });

        });

    });

    return Application.TextArea;
});
