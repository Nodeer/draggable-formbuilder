define([
    "application"
], function(Application) {
    Application.module("Forms", function(Forms, Application, Backbone, Marionette, $, _) {
        "use strict";

        Forms.Router = Marionette.AppRouter.extend({
            appRoutes : {
                "forms" : "listForms"
            }
        });

        var API = {
            listForms : function() {
                require([ "application/modules/forms/list/list.controller" ],
                    function(FormListController) {
                        FormListController.listForms();
                });
            }
        };

        Application.on("forms:start", function() {
            Application.navigate("forms");
            API.listForms();
        });

        Application.addInitializer(function() {
            new Forms.Router({
                controller : API
            });
        });

    });

    return Application.Forms;
});
