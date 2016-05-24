define([
    "marionette",
    "bootstrap"
], function(Marionette){
    Marionette.Region.Dialog = Marionette.Region.extend({
        onShow: function(view){
            this.listenTo(view, "dialog:close", this.closeDialog);
            this.$el.modal("show");
        },

        closeDialog: function(){
            this.stopListening();
            this.empty();
            this.$el.modal('hide')
        }
    });

    return Marionette.Region.Dialog;
});
