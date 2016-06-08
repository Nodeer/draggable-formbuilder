define([
    "application",
    "tpl!application/modules/forms/templates/new/form.tpl",
    "backbone-syphon"
], function(Application, template) {
    Application.module("Forms.New", function(New, Application, Backbone, Marionette, $, _) {
        "use strict";

        New.NewForm = Marionette.ItemView.extend({
            template   : template,
            events : {
                "click #create-form" : "submit"
            },
            submit : function (e) {
                e.preventDefault();
                var data = Backbone.Syphon.serialize(this);
                this.trigger("forms:submit", data);
            },
            onError : function(errors) {
                var $view       = this.$el;
                var clearError  = function () {
                    $view.find(".has-error").removeClass('has-error');
                };

                var highlightError = function (key, value) {
                    $view.find("#group-" + value).addClass("has-error");
                };

                clearError();
                _.each(errors, highlightError);
            }
        });
    });

    return Application.Forms.New.NewForm;
});