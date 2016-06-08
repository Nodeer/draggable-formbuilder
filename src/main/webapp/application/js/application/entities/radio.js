define([
    "application"
], function (Application) {
    Application.module("Entities", function(Entities, Application, Backbone, Marionette, $, _) {
        "use strict";

        Entities.RadioModel = Backbone.Model.extend({
            urlRoot  : "radio",
            defaults : {
            }
        });

        Entities.RadioCollection = Backbone.Collection.extend({
            url : "radio",
            model : Entities.RadioModel
        });

        Application.reqres.setHandler("radio:entity:new", function() {
            return new Entities.RadioModel();
        });

    });

    return Application.Entities;
});
