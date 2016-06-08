define([
    "application",
    "jquery-ui"
], function (Application) {
    Application.module("Common.Toolbox", function (Toolbox, Application, Backbone, Marionette, $, _) {
        "use strict";

        Toolbox.ItemView = Marionette.ItemView.extend({
            onRender : function() {
                var self = this;
                $(this.$el).draggable({
                    cursor      : "move",
                    helper      : "clone",
                    appendTo    : "#forms-editor-area",
                    stop        : function(event, ui) {
                        var createEvent = self.model.get("component_view");
                        Application.trigger(createEvent);
                    }
                });
            },
            events : {
                "click" : "clicked"
            },
            clicked : function () {
            }
        });
    });

    return Application.Common.Toolbox.ItemView;
});
