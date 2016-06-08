define([
    "application",
    "backbone-localstorage"
], function (Application) {
    Application.module("Settings.Storage", function(Storage, Application, Backbone, Marionette, $, _) {

        var findStorageKey = function(entity) {
            if ( entity.urlRoot ) {
                return _.result(entity, "urlRoot");
            }

            if ( entity.url ) {
                return _.result(entity, "url");
            }

            if ( entity.collection && entity.collection.url ) {
                return _.result(entity.collection, "url");
            }

            throw new Error("Storage key missing");
        };

        var StorageMixin = function(entityPrototype) {
            var storageKey = findStorageKey(entityPrototype);

            return {
                localStorage : new Backbone.LocalStorage(storageKey)
            }
        };

        Storage.configureStorage = function(entity) {
            _.extend(entity.prototype, new StorageMixin(entity.prototype));
        }

    });

    return Application.Settings.Storage;
});
