<div class="col-md-4"></div>
<div class="col-md-4">
	<div class="panel panel-default">
		<div class="panel-heading">
		<h4>Change Password</h4>
		</div>
		<div class="panel-body">
			<?php echo form_open('/dashboard/change_password');?>			
				<input type="password" placeholder="current password" class="form-control " name="current_pass"  />
				<br/>
				<input type="password" placeholder="new password" class="form-control " name="new_pass"  />
				<br/>
				<input type="password" placeholder="confirm new password" class="form-control " name="re_new_pass"  />
				<br/>
				<input type="submit" name="save" class="btn btn-success" value="save" />
 			<?php echo form_close();?>
		</div>
	</div>
</div>
<div class="col-md-4"></div>
