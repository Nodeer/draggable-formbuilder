define([
    "application",
    "tpl!application/modules/editor/templates/engine/engine.tpl",
    "jquery-ui"
], function(Application, template) {
    Application.module("Editor.Engine", function(Engine, Application, Backbone, Marionette, $, _) {
        "use strict";

        Engine.EngineView = Marionette.ItemView.extend({
            ui : {
                "button_save"    : "#editor-save-cmd",
                "button_cancel"  : "#editor-cancel-cmd"
            },
            events : {
                "click @ui.button_save"    : "save",
                "click @ui.button_cancel"  : "cancel"
            },
            onRender : function () {
                this.$el.find("#form-editable-area").droppable({
                    activate: function (event, ui) {
                    },
                    create  : function (event, ui) { },
                    drop    : function (event, ui) { },
                    over    : function (event, ui) { },
                    out     : function (event, ui) { }
                }).sortable({
                    handle  : ".btn-move",
                    cancel  : ""
                });
            },
            template        : template,
            addComponent    : function (options) {
                var self = this;
                require(["application/entities/components"], function () {
                    Application.request("forms:components:new", {
                        form_id : self.model.id,
                        type    : options.type,
                        data    : options.view.model.toJSON()
                    });
                });

                $("#form-editable-area").append(options.view.render().el);
            },
            deleteComponent : function (options) {
                // console.log( "Delete component from LocalStorage" );
            },
            save : function () {
                this.trigger("forms:save", this.model);
            },
            cancel : function () {
                Application.trigger("forms:start");
            }

        });
    });

    return Application.Editor.Engine.EngineView;
});
