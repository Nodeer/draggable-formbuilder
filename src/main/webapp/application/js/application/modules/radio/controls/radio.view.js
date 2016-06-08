define([
    "application",
    "tpl!application/modules/radio/templates/controls/radio.tpl"
], function (Application, template) {
    Application.module("Radio.Controls", function(Controls, Application, Backbone, Marionette, $, _){
        "use strict";

        Controls.RadioControlsView = Marionette.ItemView.extend({
            tag         : "form",
            template    : template,
            attributes  : {
                "role"  : "form"
            }
        });
    });

    return Application.Radio.Controls.RadioControlsView;
});
