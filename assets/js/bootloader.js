require.config({
    baseUrl: "assets/js",
    paths: {
        "bootstrap"                     : "vendor/bootstrap/bootstrap",
        "backbone"                      : "vendor/backbone/backbone",
        "backbone-syphon"               : "vendor/backbone/syphon",
        "backbone-localstorage"         : "vendor/backbone/localstorage",
        "underscore"                    : "vendor/underscore/underscore",
        "text"                          : "vendor/require/text",
        "jquery"                        : "vendor/jquery/jquery",
        "jquery-ui"                     : "vendor/jquery/jquery-ui",
        "marionette"                    : "vendor/backbone/marionette",
        "marionette-animated-region"    : "vendor/backbone/marionette-animated-region",
        "velocity"                      : "vendor/velocity/velocity",
        "velocity-ui"                   : "vendor/velocity/velocity.ui",
        "tpl"                           : "vendor/require/tpl"
    },
    shim: {
        "jquery-ui": {
            deps : ["jquery"],
            exports: "jquery-ui"
        },
        "backbone": {
            deps : ["jquery", "underscore"],
            exports: "Backbone"
        },
        "underscore": {
            exports : "_"
        },
        "marionette" : {
            deps : ["backbone"],
            exports : "Marionette"
        },
        "bootstrap": {
            deps : ["jquery"],
            exports : "bootstrap"
        },
        "velocity" : {
            deps    : [ "jquery" ],
            exports : "velocity"
        },
        "velocity-ui" : {
            deps    : [ "velocity" ],
            exports : "velocity-ui"
        },
        "marionette-animated-region" : {
            deps    : [ "marionette", "velocity", "velocity-ui" ],
            exports : "marionette-animated-region"
        },
        "tpl" : ["text"]
    }
});

require([
        "application",
        "application/modules/header/header.app"
    ],
    function(Application){
        Application.start();
    });
