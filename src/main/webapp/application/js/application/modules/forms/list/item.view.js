define([
    "application",
    "tpl!application/modules/forms/templates/list/item_list.tpl"
], function(Application, template) {
    Application.module("Forms.List", function(List, Application, Backbone, Marionette, _, $) {
        "use strict";

        List.ItemListView = Marionette.ItemView.extend({
            template : template,
            tagName  : "tr",
            events : {
                "click"                 : "highlight",
                "click #button-edit"    : "editItem",
                "click #button-delete"  : "deleteItem"
            },
            highlight : function(e) {
                e.preventDefault();
                this.$el.toggleClass("warning");
            },
            editItem : function(e) {
                e.stopPropagation();
                this.trigger("forms:edit", this.model);
            },
            deleteItem : function(e) {
                e.stopPropagation();
                this.trigger("forms:delete", this.model);
            }

        });
    });

    return Application.Forms.List.ItemListView;
});
