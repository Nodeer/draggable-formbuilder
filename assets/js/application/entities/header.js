define([
    "application"
], function (Application) {
    Application.module("Entities", function(Entities, Application, Backbone, Marionette, $, _) {
        "use strict";

        Entities.HeaderModel = Backbone.Model.extend({
            defaults: {
                "option_name"     : "",
                "option_url"      : "",
                "option_trigger"  : ""
            }
        });

        Entities.HeaderCollection = Backbone.Collection.extend({
            model : Entities.HeaderModel
        });

        var initializeCollection = function() {
            var options = new Entities.HeaderCollection([
                {
                    id : "0",
                    option_name   : "Forms list",
                    option_url    : "forms",
                    option_trigger: "forms:list"
                }
            ]);

            return options.models;
        };

        var API = {
            getHeaderEntities : function() {
                var options = new Entities.HeaderCollection();
                if ( options.length === 0 ) {
                    var models = initializeCollection();
                    options.reset(models);
                }
                return options;
            }
        };

        Application.reqres.setHandler("header:entities", function() {
            return API.getHeaderEntities();
        });

    });

    return Application.Entities;
});
