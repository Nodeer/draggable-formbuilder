define([
    "application",
    "tpl!application/modules/header/templates/show/header.tpl"
], function(Application, template) {
    Application.module("Header.Show", function(Show, Showcase, Backbone, Marionette, _, $) {
        "use strict";

        Show.Layout = Marionette.LayoutView.extend({
            tagName     : "nav",
            template    : template,
            className   : "navbar navbar-default",
            regions     : {
                "optionsRegion" : "#header-options"
            },
            attributes  : {
                "role"  : "navigation"
            }
        });
    });

    return Application.Header.Show.Layout;
});
