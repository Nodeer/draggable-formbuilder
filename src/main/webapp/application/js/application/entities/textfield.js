define([
    "application"
], function (Application) {
    Application.module("Entities", function(Entities, Application, Backbone, Marionette, $, _) {
        "use strict";

        Entities.TextFieldModel = Backbone.Model.extend({
            urlRoot  : "textfields",
            defaults : {
                id          : "_text",
                name        : "input",
                label       : "Field:",
                placeholder : "Field",
                size        : "input-md",
                width       : "col-xs-2"
            }
        });

        Entities.TextFieldCollection = Backbone.Collection.extend({
            url : "textfields",
            model : Entities.TextFieldModel
        });

        Application.reqres.setHandler("textfield:entity:new", function() {
            return new Entities.TextFieldModel();
        });

    });

    return Application.Entities;
});
