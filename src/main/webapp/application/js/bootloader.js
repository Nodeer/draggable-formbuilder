require.config({
    baseUrl: "application/js",
    paths: {
        "bootstrap"                     : "libs/bootstrap/bootstrap",
        "backbone"                      : "libs/backbone/backbone",
        "backbone-syphon"               : "libs/backbone.syphon/backbone.syphon",
        "backbone.babysitter"           : "libs/backbone.babysitter/backbone.babysitter",
        "backbone.wreqr"                : "libs/backbone.wreqr/backbone.wreqr",
        "backbone-localstorage"         : "libs/backbone-localstorage/backbone.localStorage",
        "underscore"                    : "libs/underscore/underscore",
        "text"                          : "libs/text/text",
        "marionette"                    : "libs/marionette/backbone.marionette",
        "velocity"                      : "libs/velocity/velocity",
        "velocity-ui"                   : "libs/velocity/velocity.ui",
        "jquery"                        : "libs/jquery/jquery",
        "jquery-ui"                     : "libs/jquery-ui/jquery-ui",
        "tpl"                           : "libs/requirejs-tpl-bower/tpl",

        "marionette-animated-region"    : "vendor/marionette/marionette-animated-region"
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
