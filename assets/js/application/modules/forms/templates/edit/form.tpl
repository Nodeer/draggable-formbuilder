<div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Edit: <%= form_name %></h4>
      </div>
      <div class="modal-body">

        <form>
          <div id="group-form_name" class="form-group">
            <label for="name" class="control-label">Form name:</label>
            <input type="text" class="form-control" id="name" name="form_name" value="<%= form_name %>">
          </div>

          <div id="group-form_action" class="form-group">
            <label for="action" class="control-label">Action:</label>
            <input type="text" class="form-control" id="action" name="form_action" value="<%= form_action %>">
          </div>

          <div id="group-form_description" class="form-group">
            <label for="description" class="control-label">Description:</label>
            <textarea class="form-control" id="description" name="form_description"><%= form_description %></textarea>
          </div>
        </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-info" id="open-editor">Edit form</button>
        <button type="button" class="btn btn-primary" id="update-form">Update form</button>
      </div>
    </div>
</div>