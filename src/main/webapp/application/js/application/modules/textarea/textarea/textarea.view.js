define([
    "application",
    "application/modules/common/components/component.view",
    "tpl!application/modules/textarea/templates/textarea/textarea.tpl"
], function (Application, ComponentView, template) {
    Application.module("TextArea.TextArea", function(TextArea, Application, Backbone, Marionette, $, _){
        "use strict";

        TextArea.TextAreaView = ComponentView.extend({
            template : template
        });
    });

    return Application.TextArea.TextArea.TextAreaView;
});
