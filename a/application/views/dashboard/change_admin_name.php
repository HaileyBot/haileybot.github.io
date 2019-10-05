<div class="col-md-4"></div>
<div class="col-md-4">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4>
				<i class="fa fa-user"></i> change admin name </h4>
			</div>
			<div class="panel-body">
				<?php echo form_open('/dashboard/change_admin_name');?>
					<input type="text" placeholder="New Admin Name" class="form-control " name="new_admin_name"  />
					<br/>
					<input type="submit" name="save" class="btn btn-success" value="save" />
				<?php echo form_close();?>
			</div>
		</div>
	</div>
	<div class="col-md-4"></div>
