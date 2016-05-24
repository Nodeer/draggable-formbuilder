define([
    "application",
    "application/modules/forms/list/item.view",
    "tpl!application/modules/forms/templates/list/list.tpl"
], function(Application, ChildView, template) {
    Application.module("Forms.List", function(List, Application, Backbone, Marionette, $, _) {
        List.ListView = Marionette.CompositeView.extend({
            template            : template,
            className           : "panel panel-default",
            childView           : ChildView,
            childViewContainer  : "tbody",
            events              : {
                "click #open-form-dialog" : "openDialog"
            },
            openDialog : function() {
                this.trigger("forms:new");
            }
        });
    });

    return Application.Forms.List.ListView;
});
