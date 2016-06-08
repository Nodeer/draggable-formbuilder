define([
    "application",
    "application/modules/settings/storage/localstorage"
], function (Application, Storage) {
    Application.module("Entities", function(Entities, Application, Backbone, Marionette, $, _) {
        "use strict";

        Entities.getComponentModelEntity = function (options) {
            Entities.ComponentModel = Backbone.Model.extend({
                urlRoot : function() {
                    return "forms/" + options.form_id + "/components";
                },
                defaults : {
                    "id"        : "",
                    "form_id"   : "",
                    "type"      : "",
                    "data"      : { }
                }
            });

            Storage.configureStorage(Entities.ComponentModel);
            return Entities.ComponentModel;
        };

        Entities.getComponentCollectionEntity = function (options) {
            Entities.ComponentCollection = Backbone.Collection.extend({
                url : function () {
                    return "forms/" + options.form_id + "/components";
                },
                model : Entities.getComponentModelEntity(options)
            });

            Storage.configureStorage(Entities.ComponentCollection);
            return Entities.ComponentCollection;
        };

        var API = {
            getComponentSetEntity : function( attr ) {
                var CollectionEntity    = Entities.getComponentCollectionEntity( attr );
                var componentSet        = new CollectionEntity({ form_id : attr.form_id });
                componentSet.fetch();
                return componentSet;
            }
        };

        Application.reqres.setHandler("forms:components:new", function(attr) {
            var collection = API.getComponentSetEntity( attr );

            attr.id  = collection.length++;
            var ModelEntity = Entities.getComponentModelEntity( attr );
            var comp        = new ModelEntity(attr);

            /*
            comp.save({
                success : function () {
                    collection.add(this);
                },
                error : function () {
                    console.log("There is a problem");
                }
            });
            */
        });

    });

    return Application.Entities;
});
