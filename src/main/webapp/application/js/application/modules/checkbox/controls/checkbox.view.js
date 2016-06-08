define([
    "application",
    "tpl!application/modules/checkbox/templates/controls/checkbox.tpl"
], function (Application, template) {
    Application.module("Checkbox.Controls", function(Controls, Application, Backbone, Marionette, $, _){
        "use strict";

        Controls.CheckboxControlsView = Marionette.ItemView.extend({
            tag         : "form",
            template    : template,
            attributes  : {
                "role"  : "form"
            }
        });
    });

    return Application.Checkbox.Controls.CheckboxControlsView;
});
