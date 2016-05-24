define([
    "application",
    "application/modules/settings/storage/localstorage"
], function (Application, Storage) {
    Application.module("Entities", function(Entities, Application, Backbone, Marionette, $, _) {
        "use strict";

        Entities.ComponentModel = Backbone.Model.extend({
            urlRoot  : "components",
            defaults : {
                "component_id"      : "",
                "component_name"    : ""
            }
        });
        Storage.configureStorage(Entities.ComponentModel);

        Entities.ComponentCollection = Backbone.Collection.extend({
            url     : "components",
            model   : Entities.ComponentModel
        });
        Storage.configureStorage(Entities.ComponentCollection);

        var initializeCollection = function() {
            var componentSet = new Entities.ComponentCollection([
                {
                    "component_id"          : "0",
                    "component_name"        : "Button",
                    "component_icon"        : "glyphicon-edit",
                    "component_attributes"  : {
                    }
                },
                {
                    "component_id"          : "1",
                    "component_name"        : "Text Field",
                    "component_icon"        : "glyphicon-eye-open",
                    "component_attributes"  : {
                    }
                },
                {
                    "component_id"          : "2",
                    "component_name"        : "Text Area",
                    "component_icon"        : "glyphicon-globe",
                    "component_attributes"  : {
                    }
                },
                {
                    "component_id"          : "3",
                    "component_name"        : "Checkbox",
                    "component_icon"        : "glyphicon-tasks",
                    "component_attributes"  : {
                    }
                },
                {
                    "component_id"          : "4",
                    "component_name"        : "Radio",
                    "component_icon"        : "glyphicon-link",
                    "component_attributes"  : {
                    }
                }
            ]);
            componentSet.forEach(function(component) {
                component.save();
            });
            return componentSet.models;
        };

        var API = {
            getComponentEntities : function() {
                var componentSet = new Entities.ComponentCollection();
                componentSet.fetch();

                if ( componentSet.length === 0 ) {
                    var models = initializeCollection();
                    componentSet.reset(models);
                }
                return componentSet;
            },
            getComponentEntity : function(componentId) {
                var componentSet = this.getComponentEntities();
                return componentSet.get(componentId);
            }
        };

        Application.reqres.setHandler("components:entities", function() {
            return API.getComponentEntities();
        });

        Application.reqres.setHandler("components:entity", function(componentId) {
            return API.getComponentEntity(componentId);
        });

    });

    return Application.Entities;
});
