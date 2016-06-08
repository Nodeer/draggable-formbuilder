define([
    "application",
    "application/modules/common/components/component.view",
    "tpl!application/modules/radio/templates/radio/radio.tpl"
], function (Application, ComponentView, template) {
    Application.module("Radio.Radio", function(Radio, Application, Backbone, Marionette, $, _){
        "use strict";

        Radio.RadioView = ComponentView.extend({
            template : template
        });
    });

    return Application.Radio.Radio.RadioView;
});