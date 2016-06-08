define([
    "application"
], function (Application) {
    Application.module("Entities", function(Entities, Application, Backbone, Marionette, $, _) {
        "use strict";

        Entities.CheckboxModel = Backbone.Model.extend({
            urlRoot  : "checkbox",
            defaults : {
            }
        });

        Entities.CheckboxCollection = Backbone.Collection.extend({
            url : "checkbox",
            model : Entities.CheckboxModel
        });

        Application.reqres.setHandler("checkbox:entity:new", function() {
            return new Entities.CheckboxModel();
        });

    });

    return Application.Entities;
});
