define([
    "application",
    "application/modules/common/toolbox/item.view",
    "tpl!application/modules/toolbox/templates/tool/tool.tpl"
], function(Application, ItemView, template) {
    Application.module("Toolbox.Tool", function(Tool, Application, Backbone, Marionette, $, _) {
        "use strict";

        Tool.ToolView = ItemView.extend({
            template    : template,
            className   : "list-group-item",
            attributes  : {
                "role"  : "button"
            }
        });
    });

    return Application.Toolbox.Tool.ToolView;
});
