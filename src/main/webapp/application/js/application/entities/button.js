define([
    "application"
], function (Application) {
    Application.module("Entities", function(Entities, Application, Backbone, Marionette, $, _) {
        "use strict";

        Entities.ButtonModel = Backbone.Model.extend({
            urlRoot  : "buttons",
            defaults : {
                tagId : "buttonID",
                name  : "Button Name",
                type  : "btn-default",
                size  : "btn-md"
            }
        });

        Entities.ButtonCollection = Backbone.Collection.extend({
            url : "buttons",
            model : Entities.ButtonModel
        });

        Application.reqres.setHandler("button:entity:new", function() {
            return new Entities.ButtonModel();
        });

    });

    return Application.Entities;
});
