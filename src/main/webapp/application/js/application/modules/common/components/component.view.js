define([
    "application",
    "tpl!application/modules/common/templates/components/component.tpl",
    "jquery-ui",
    "backbone-syphon"
], function (Application, controls) {
    Application.module("Common.Components", function (Components, Application, Backbone, Marionette, $, _) {
        "use strict";

        Components.ComponentView = Marionette.ItemView.extend({
            initialize : function() {
                var self = this;
                $("body").on("click", function (e) {
                    self.hideControls(e);
                    // self.hideOptions(e);
                });

                this.listenTo(this.model, "change", this.render);
                // $(this.$el).draggable({ cursor : "move", opacity: 0.50 });
            },
            className   : "control-group",
            onRender    : function () {
                this.$el.append(controls);
                Backbone.Syphon.deserialize(this, this.model.toJSON());
            },
            events      : {
                "click"             : "click",
                "click .btn-delete" : "clickedDelete"
            },
            click : function (e) {
                this.showOptions(e);
                this.showControls(e);
            },
            hideControls : function (e) {
                if ( !$(e.target).is(this.$el) ) {
                    this.$el.find(".component-controls").addClass("hidden");
                }
            },
            showOptions : function (e) {
                e.stopPropagation();
                this.trigger("show:controls", this.model);
            },
            hideOptions : function (e) {
                e.stopPropagation();
                this.trigger("close:controls");
            },
            showControls : function (e) {
                e.stopPropagation();
                this.$el.find(".component-controls").removeClass("hidden");
            },
            clickedDelete : function (e) {
                this.hideOptions(e);
                this.$el.remove();
            }
        });
    });

    return Application.Common.Components.ComponentView;
});
