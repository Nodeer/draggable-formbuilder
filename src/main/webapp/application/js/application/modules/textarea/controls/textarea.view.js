define([
    "application",
    "tpl!application/modules/textarea/templates/controls/textarea.tpl"
], function (Application, template) {
    Application.module("Sidebar.Controls", function(Controls, Application, Backbone, Marionette, $, _){
        "use strict";

        Controls.TextareaView = Marionette.ItemView.extend({
            tag         : "form",
            template    : template,
            attributes : {
                "role" : "form"
            }
        });
    });

    return Application.Sidebar.Controls.TextareaView;
});
