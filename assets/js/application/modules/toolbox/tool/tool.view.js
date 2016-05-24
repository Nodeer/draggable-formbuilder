define([
    "application",
    "tpl!application/modules/toolbox/templates/tool/tool.tpl"
], function(Application, template) {
    Application.module("Toolbox.Tool", function(Tool, Application, Backbone, Marionette, $, _) {
        "use strict";

        Tool.ToolView = Marionette.ItemView.extend({
            template    : template,
            className   : "list-group-item",
            attributes  : {
                "role"  : "button"
            },
            events      : {
                "click" : "getComponent"
            },
            getComponent : function () {
                console.log("Component " + this.model.get("component_name") + " was clicked.");
            }
        });
    });

    return Application.Toolbox.Tool.ToolView;
});
