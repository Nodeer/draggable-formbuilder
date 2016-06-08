define([
    "application",
    "application/modules/common/components/component.view",
    "tpl!application/modules/checkbox/templates/checkbox/checkbox.tpl"
], function (Application, ComponentView, template) {
    Application.module("Checkbox.Checkbox", function(Checkbox, Application, Backbone, Marionette, $, _){
        "use strict";

        Checkbox.CheckboxView = ComponentView.extend({
            template : template
        });
    });

    return Application.Checkbox.Checkbox.CheckboxView;
});
