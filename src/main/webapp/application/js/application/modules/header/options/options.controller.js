define([
    "application"
], function(Application) {
    Application.module("Header.Options", function(Options, Application, Backbone, Marionette, $, _) {
        'use strict';

        Options.Controller = {
            listHeaderOptions: function(options) {
                var self = this;

                require(
                    [
                        "application/modules/header/options/options.view",
                        "application/entities/header"
                    ],
                    function(HeaderOptionsView) {
                        var headerOptions = Application.request("header:entities");

                        self.region = options.region;
                        self.view   = new HeaderOptionsView({ collection : headerOptions });
                        self.region.show(self.view);

                        self.view.on("childview:navigate", function(childView, model) {
                            Application.trigger( model.get("option_trigger") );
                        });
                    }
                );
            }
        }
    });

    return Application.Header.Options.Controller;
});
