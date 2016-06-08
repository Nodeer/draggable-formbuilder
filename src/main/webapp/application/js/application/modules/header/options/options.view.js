define([
    "application",
    "application/modules/header/options/option.view"
], function(Application, OptionView) {
    Application.module("Header.Options", function(Options, Application, Backbone, Marionette, $, _) {
        'use strict';

        Options.CollectionView = Marionette.CollectionView.extend({
            tagName     : "ul",
            className   : "nav navbar-nav",
            childView   : OptionView
        });
    });

    return Application.Header.Options.CollectionView;
});
