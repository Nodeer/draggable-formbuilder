define([
    "application"
], function(Application) {
    Application.module("Sidebar", function(Sidebar, Application, Backbone, Marionette, $, _) {
        "use strict";

        var API = {
            startSidebar : function (options) {
                require(["application/modules/sidebar/show/show.controller"],
                    function (ShowController) {
                        ShowController.startSidebar(options);
                });
            },
            showControls : function (controls) {
                require(["application/modules/sidebar/show/show.controller"],
                    function (ShowController) {
                        ShowController.showControls(controls);
                });
            }
        };

        Application.on("sidebar:start", function (options) {
            API.startSidebar(options);
        });

        Application.on("sidebar:show", function (controls) {
            API.showControls(controls);
        });

    });

    return Application.Editor;
});
