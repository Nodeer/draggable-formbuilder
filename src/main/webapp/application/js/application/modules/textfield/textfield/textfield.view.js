define([
    "application",
    "application/modules/common/components/component.view",
    "tpl!application/modules/textfield/templates/textfield/textfield.tpl"
], function (Application, ComponentView, template) {
    Application.module("TextField.TextField", function(TextField, Application, Backbone, Marionette, $, _){
        "use strict";

        TextField.TextFieldView = ComponentView.extend({
            initialize : function () {
                this.listenTo(this.model, "change:width", this.changeWidth);
                this.changeWidth();
            },
            changeWidth : function () {
                this.$el.removeClass(
                    this.$el.attr('class').split(' ')[1]
                );
                this.$el.addClass( this.model.get("width") );
            },
            template :template
        });
    });

    return Application.TextField.TextField.TextFieldView;
});
