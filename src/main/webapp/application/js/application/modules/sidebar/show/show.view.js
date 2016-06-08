define([
    "application",
    "tpl!application/modules/sidebar/templates/show/show.tpl"
], function(Application, template) {
    Application.module("Sidebar.Show", function(Show, Application, Backbone, Marionette, $, _) {
        "use strict";

        Show.ShowView = Marionette.LayoutView.extend({
            template            : template,
            className           : "panel panel-default",
            regions : {
                controlRegion  : "#sidebar-controls"
            }
        });
    });

    return Application.Sidebar.Show.ShowView;
});
