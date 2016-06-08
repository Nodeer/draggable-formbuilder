define([
    "application",
    "application/modules/toolbox/tool/tool.view",
    "tpl!application/modules/toolbox/templates/engine/main_layout.tpl"
], function(Application, ToolView, template) {
    Application.module("Toolbox.Engine", function(Engine, Application, Backbone, Marionette, $, _) {
        "use strict";

        Engine.MainLayout = Marionette.CompositeView.extend({
            template            : template,
            childView           : ToolView,
            childViewContainer  : "#toolbox-components-list",
            events              : {
                "click #slide-submenu" : "hideSidebar",
                "click .mini-submenu"  : "toggleSidebar"
            },
            hideSidebar : function (e) {
                $("#slide-submenu").closest('.list-group').fadeOut('slide',function(){
                    $('.mini-submenu').fadeIn();
                });
            },
            toggleSidebar : function () {
                $(".mini-submenu").next('.list-group').toggle('slide');
                $('.mini-submenu').hide();
            }
        });
    });

    return Application.Toolbox.Engine.MainLayout;
});
