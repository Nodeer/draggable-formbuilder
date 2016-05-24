define([
    "application"
], function(Application) {
    Application.module("Forms.List", function(List, Application, Backbone, Marionette, $, _) {
        "use strict";

        List.Controller = {
            listForms: function() {
                require(
                    [
                        "application/modules/forms/list/list.view",
                        "application/entities/forms"
                    ],
                    function(FormListView) {
                        var forms = Application.request("forms:entities");
                        var formView = new FormListView({ collection : forms });
                        Application.mainRegion.show(formView);

                        formView.on("forms:new", function () {
                            require(["application/modules/forms/new/new.view"],
                                function (NewForm) {
                                    var newModel    = Application.request("forms:entity:new");
                                    var newForm     = new NewForm({ model : newModel });

                                    newForm.on("forms:submit", function (data) {
                                        if ( forms.length > 0 ) {
                                            data.form_id = forms.length++;
                                        } else {
                                            data.form_id = 1;
                                        }

                                        if ( !newModel.save(data) ) {
                                            newForm.onError(newModel.validationError);
                                        } else {
                                            forms.add(newModel);
                                            newForm.trigger("dialog:close");
                                        }

                                    });

                                    Application.dialogRegion.show(newForm);
                            });
                        });

                        formView.on("childview:forms:edit", function (childview, item) {
                            require(["application/modules/forms/edit/edit.view"],
                                function (EditForm) {
                                    var editForm = new EditForm({ model : item });

                                    editForm.on("forms:submit", function (data) {
                                        if ( !item.save(data) ) {
                                            editForm.onError(item.validationError);
                                        } else {
                                            childview.render();
                                            editForm.trigger("dialog:close");
                                        }
                                    });

                                    Application.dialogRegion.show(editForm);
                                });
                        });

                        formView.on("childview:forms:delete", function (childview, item) {
                            item.destroy();
                        });
                    }
                );
            }
        }
    });

    return Application.Forms.List.Controller;
});
