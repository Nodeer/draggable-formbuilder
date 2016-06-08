define([
    "application",
    "application/modules/common/components/component.view",
    "tpl!application/modules/button/templates/button/button.tpl"
], function (Application, ComponentView, template) {
    Application.module("Button.Button", function(Button, Application, Backbone, Marionette, $, _){
        "use strict";

        Button.ButtonView = ComponentView.extend({
            template : template
        });

    });

    return Application.Button.Button.ButtonView;
});
