define([
    "application"
], function(Application) {
    Application.module("Sidebar.Show", function(Show, Application, Backbone, Marionette, $, _) {
        "use strict";

        Show.ShowController = {
            startSidebar : function (options) {
                var self = this;
                require(
                    ["application/modules/sidebar/show/show.view"],
                    function (ShowView) {

                        var sidebar = new ShowView();
                        self.region = options.region;
                        self.region.show(sidebar);

                        Application.on("sidebar:display", function (view) {
                            sidebar.controlRegion.show(view);
                        });

                        Application.on("sidebar:close", function () {
                            sidebar.controlRegion.empty();
                        });

                });
            },
            showControls : function (options) {
                var self = this;
                require(
                    ["application/modules/sidebar/show/show.view"],
                    function (ShowView) {
                        self.region     = options.region;
                        self.control    = options.control;

                        var controlPanel = new ShowView();
                        self.region.show(controlPanel);

                        controlPanel.controlRegion.show(self.control);
                    });
            }
        }
    });

    return Application.Sidebar.Show.ShowController;
});
