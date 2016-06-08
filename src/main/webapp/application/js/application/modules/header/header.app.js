define([
    "application"
], function(Application) {
    Application.module("Header", function(Header, Application, Backbone, Marionette, $, _) {
        'use strict';

        var API = {
            showHeader : function() {
                require(
                    ["application/modules/header/show/show.controller"],
                    function(HeaderShowController) {
                        HeaderShowController.showHeader();
                });
            },
            listHeaderOptions : function(options) {
                require(
                    ["application/modules/header/options/options.controller"],
                    function(HeaderOptionsController) {
                        HeaderOptionsController.listHeaderOptions(options);
                    });
            }
        };

        Header.on("start", function() {
            API.showHeader();
        });

        Application.on("header:options:list", function(options) {
            API.listHeaderOptions(options);
        });

    });

    return Application.Header;
});
