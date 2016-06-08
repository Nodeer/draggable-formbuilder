define([
    "application",
    "tpl!application/modules/textfield/templates/controls/textfield.tpl",
    "backbone-syphon"
], function (Application, template) {
    Application.module("TextField.Controls", function(Controls, Application, Backbone, Marionette, $, _){
        "use strict";

        Controls.TextFieldView = Marionette.ItemView.extend({
            tag         : "form",
            template    : template,
            attributes  : {
                "role"  : "form"
            },
            onRender    : function () {
                Backbone.Syphon.deserialize(this, this.model.toJSON());
            },
            ui          : {
                "field_id"          : "#txt-field-id",
                "field_name"        : "#txt-field-name",
                "field_label"       : "#txt-field-label",
                "field_placeholder" : "#txt-field-placeholder",
                "field_width"       : "#txt-field-width",
                "field_size"        : "#txt-field-size"
            },
            events      : {
                "blur @ui.field_id"         : "setID",
                "blur @ui.field_name"       : "setName",
                "blur @ui.field_label"      : "setLabel",
                "blur @ui.field_placeholder": "setPlaceholder",
                "change @ui.field_width"    : "setWidth",
                "change @ui.field_size"     : "setSize"
            },
            setID : function() {
                this.model.set("id", this.ui.field_id.val());
            },
            setName : function() {
                this.model.set("name", this.ui.field_name.val());
            },
            setLabel : function() {
                this.model.set("label", this.ui.field_label.val());
            },
            setPlaceholder : function() {
                this.model.set("placeholder", this.ui.field_placeholder.val());
            },
            setSize  : function() {
                this.model.set("size", this.ui.field_size.val());
            },
            setWidth : function() {
                this.model.set("width", this.ui.field_width.val());
            }

        });
    });

    return Application.TextField.Controls.TextFieldView;
});
