define([
    "application",
    "tpl!application/modules/forms/templates/edit/form.tpl",
    "backbone-syphon"
], function(Application, template) {
    Application.module("Forms.Edit", function(Edit, Application, Backbone, Marionette, $, _) {
        "use strict";

        Edit.EditForm = Marionette.ItemView.extend({
            template   : template,
            events : {
                "click #open-editor"    : "openEditor",
                "click #save-form"      : "submit"
            },
            submit : function (e) {
                e.preventDefault();
                var data = Backbone.Syphon.serialize(this);
                this.trigger("forms:submit", data);
            },
            openEditor : function (e) {
                e.preventDefault();
                var data = Backbone.Syphon.serialize(this);
                this.trigger("editor:open", data);
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

    return Application.Forms.Edit.EditForm;
});