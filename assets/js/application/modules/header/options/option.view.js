define([
    "application",
    "tpl!application/modules/header/templates/options/header_option.tpl"
], function(Application, template) {
    Application.module("Header.Options", function(Options, Showcase, Backbone, Marionette, _, $) {
        'use strict';

        Options.View = Marionette.ItemView.extend({
            template : template,
            tagName  : "li",
            events : {
                "click a" : "goingTo"
            },
            goingTo : function() {
                this.trigger("navigate", this.model);
            },
            onRender : function() {
                if ( this.model.selected ) {
                    this.$el.addClass("active");
                }
            }
        });
    });

    return Application.Header.Options.View;
});
