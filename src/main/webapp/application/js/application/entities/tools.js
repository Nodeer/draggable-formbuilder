define([
    "application",
    "application/modules/settings/storage/localstorage"
], function (Application, Storage) {
    Application.module("Entities", function(Entities, Application, Backbone, Marionette, $, _) {
        "use strict";

        Entities.ToolModel = Backbone.Model.extend({
            urlRoot  : "tools",
            defaults : {
                "id"                : "",
                "label"             : "",
                "name"              : "",
                "icon"              : "",
                "component_view"    : ""
            }
        });
        Storage.configureStorage(Entities.ToolModel);

        Entities.ToolCollection = Backbone.Collection.extend({
            url     : "tools",
            model   : Entities.ToolModel
        });
        Storage.configureStorage(Entities.ToolCollection);

        var initializeCollection = function() {
            var toolSet = new Entities.ToolCollection([
                {
                    "id"                : "0",
                    "label"             : "Button",
                    "name"              : "button",
                    "icon"              : "glyphicon-edit",
                    "component_view"    : "button:new"
                },
                {
                    "id"                : "1",
                    "label"             : "Text Field",
                    "name"              : "textfield",
                    "icon"              : "glyphicon-eye-open",
                    "component_view"    : "textfield:new"
                },
                {
                    "id"                : "2",
                    "label"             : "Text Area",
                    "name"              : "textarea",
                    "icon"              : "glyphicon-globe",
                    "component_view"    : "textarea:new"
                },
                {
                    "id"                : "3",
                    "label"             : "Checkbox",
                    "name"              : "checkbox",
                    "icon"              : "glyphicon-tasks",
                    "component_view"    : "checkbox:new"
                },
                {
                    "id"                : "4",
                    "label"             : "Radio",
                    "name"              : "radio",
                    "icon"              : "glyphicon-link",
                    "component_view"    : "radio:new"
                }
            ]);
            toolSet.forEach(function(tool) {
                tool.save();
            });
            return toolSet.models;
        };

        var API = {
            getToolEntities : function() {
                var toolSet = new Entities.ToolCollection();
                toolSet.fetch();

                if ( toolSet.length === 0 ) {
                    var models = initializeCollection();
                    toolSet.reset(models);
                }
                return toolSet;
            },
            getToolEntity : function(toolId) {
                var toolSet = this.getToolEntities();
                return toolSet.get(toolId);
            }
        };

        Application.reqres.setHandler("tools:entities", function() {
            return API.getToolEntities();
        });

        Application.reqres.setHandler("tools:entity", function(toolId) {
            return API.getToolEntity(toolId);
        });

    });

    return Application.Entities;
});
