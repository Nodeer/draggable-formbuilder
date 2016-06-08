<div class="form-group-sm">
    <label class="col-sm-2 control-label">ID</label>
    <div class="col-md-10">
        <input class="form-control field" data-type="input" type="text" name="tagId" id="button-id" value="<%= tagId %>">
    </div>
</div>

<div class="form-group-sm">
    <label class="col-sm-2 control-label">Label</label>
    <div class="col-md-10">
        <input class="form-control field" data-type="input" type="text" name="name" id="button-name" value="<%= name %>">
    </div>
</div>

<div class="form-group-sm">
    <label class="col-sm-2 control-label">Type</label>
    <div class="col-md-10">
        <select name="type" class="form-control field" data-type="select" id="button-type">
          <option value="btn-default">Default</option>
          <option value="btn-primary">Primary</option>
          <option value="btn-info">Info</option>
          <option value="btn-success">Success</option>
          <option value="btn-warning">Warning</option>
          <option value="btn-danger" selected="">Danger</option>
          <option value="btn-inverse">Inverse</option>
        </select>
    </div>
</div>

<div class="form-group-sm">
    <label class="col-sm-2 control-label">Size</label>
    <div class="col-md-10">
        <select name="size" class="form-control field" data-type="select" id="button-size">
          <option value="btn-lg">Large</option>
          <option value="btn-md">Medium</option>
          <option value="btn-sm">Small</option>
          <option value="btn-xs">XSmall</option>
        </select>
    </div>
</div>
