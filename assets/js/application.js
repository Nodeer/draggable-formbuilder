define([
    "marionette",
    "marionette-animated-region",
    "application/modules/settings/marionette/regions/dialog"
], function(Marionette, AnimatedRegion){
    var Application = new Marionette.Application();

    Application.addRegions({
        headerRegion    : "#app-header",
        mainRegion      : {
            "selector"  : "#app-container",
            regionClass : AnimatedRegion,
            animation: {
                showAnimation: [
                    {
                        properties: 'transition.slideUpBigIn',
                        options: { stagger: 500 }
                    }
                ],
                hideAnimation: [
                    {
                        properties: 'transition.slideDownBigOut',
                        options: { stagger: 500 }
                    }
                ]
            }
        },
        footerRegion    : "#app-footer",
        dialogRegion    : Marionette.Region.Dialog.extend({
            el: "#app-dialog"
        })
    });

    Application.navigate = function(route,  options){
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    Application.getCurrentRoute = function() {
        return Backbone.history.fragment;
    };

    Application.on("start", function() {
        if ( Backbone.history ) {
            require([
                "bootstrap",
                "application/modules/forms/forms.app",
                "application/modules/editor/editor.app",
                "application/modules/toolbox/toolbox.app"
                ], function() {
                    Backbone.history.start();
                    if( Application.getCurrentRoute() === "" ){
                        Application.trigger("forms:start");
                    }
            });
        }
    });

    return Application;
});
