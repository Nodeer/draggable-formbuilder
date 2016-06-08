define([
    "application",
    "tpl!application/modules/button/templates/controls/button.tpl",
    "backbone-syphon"
], function (Application, template) {
    Application.module("Button.Controls", function(Controls, Application, Backbone, Marionette, $, _){
        "use strict";

        Controls.ButtonControlsView = Marionette.ItemView.extend({
            onRender  : function () {
                Backbone.Syphon.deserialize(this, this.model.toJSON());
            },
            tag         : "form",
            template    : template,
            className   : "form-horizontal",
            attributes  : {
                "role"  : "form"
            },
            ui : {
                "button_id"    : "#button-id",
                "button_name"  : "#button-name",
                "button_type"  : "#button-type",
                "button_size"  : "#button-size"
            },
            events      : {
                "blur @ui.button_id"     : "setID",
                "blur @ui.button_name"   : "setName",
                "change @ui.button_type" : "setType",
                "change @ui.button_size" : "setSize"
            },
            setID : function() {
                this.model.set("tagId", this.ui.button_id.val());
            },
            setName : function() {
                this.model.set("name",this.ui.button_name.val());
            },
            setType : function() {
                this.model.set("type", this.ui.button_type.val());
            },
            setSize : function() {
                this.model.set("size", this.ui.button_size.val());
            }
        });
    });

    return Application.Button.Controls.ButtonControlsView;
});
