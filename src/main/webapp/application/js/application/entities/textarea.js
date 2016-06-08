define([
    "application"
], function (Application) {
    Application.module("Entities", function(Entities, Application, Backbone, Marionette, $, _) {
        "use strict";

        Entities.TextAreaModel = Backbone.Model.extend({
            urlRoot  : "textarea",
            defaults : {
            }
        });

        Entities.TextAreaCollection = Backbone.Collection.extend({
            url : "textarea",
            model : Entities.TextAreaModel
        });

        Application.reqres.setHandler("textarea:entity:new", function() {
            return new Entities.TextAreaModel();
        });

    });

    return Application.Entities;
});
