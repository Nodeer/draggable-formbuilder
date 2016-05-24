define([
    "application",
    "application/modules/settings/storage/localstorage"
], function (Application, Storage) {
    Application.module("Entities", function(Entities, Application, Backbone, Marionette, $, _) {
        Entities.FormModel = Backbone.Model.extend({
            urlRoot  : "forms",
            defaults : {
                "form_id"           : "",
                "form_name"         : "",
                "form_action"       : "http://",
                "form_description"  : "",
                "form_components"   : {
                }
            },
            validate : function (attributes) {
                var errors = {};

                if ( !attributes.form_name ) {
                    errors.form_name = "Missing name.";
                }

                if ( !attributes.form_action ) {
                    errors.form_action = "Missing action.";
                }

                if ( !attributes.form_description ) {
                    errors.form_description = "Missing description.";
                }

                if ( ! _.isEmpty(errors) ) {
                    return errors;
                }
            }
        });

        Storage.configureStorage(Entities.FormModel);

        Entities.FormCollection = Backbone.Collection.extend({
            url     : "forms",
            model   : Entities.FormModel
        });

        Storage.configureStorage(Entities.FormCollection);

        var initializeCollection = function() {
            var formSet = new Entities.FormCollection([
                {
                    form_id          : "0",
                    form_name        : "Souvenir",
                    form_action      : "http://www.mysite.com/handle_form",
                    form_description : "That's just one example.",
                    form_components  : { }
                }
            ]);
            formSet.forEach(function(form) {
                form.save();
            });
            return formSet.models;
        };

        var API = {
            getFormsEntities : function() {
                var formSet = new Entities.FormCollection();
                formSet.fetch();

                if ( formSet.length === 0 ) {
                    var models = initializeCollection();
                    formSet.reset(models);
                }
                return formSet;
            },
            getFormEntity : function(formId) {
                var formSet = this.getFormsEntities();
                return formSet.get(formId);
            }
        };

        Application.reqres.setHandler("forms:entities", function() {
            return API.getFormsEntities();
        });

        Application.reqres.setHandler("forms:entity", function(formId) {
            return API.getFormEntity(formId);
        });

        Application.reqres.setHandler("forms:entity:new", function() {
            return new Entities.FormModel();
        });

    });

    return Application.Entities;
});
