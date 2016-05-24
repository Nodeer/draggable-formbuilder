define([
    "application"
], function(Application) {
    Application.module("Header.Show", function(Show, Application, Backbone, Marionette, $, _) {
        'use strict';

        Show.Controller = {
            showHeader: function() {
                require(
                    [ "application/modules/header/show/show.view" ],
                    function(HeaderView) {
                        var header = new HeaderView();

                        Application.headerRegion.show(header);
                        Application.trigger("header:options:list", { region : header.optionsRegion });
                    });
            }
        }
    });

    return Application.Header.Show.Controller;
});
