<br/><br/><br/>
<div class="col-md-4"></div>
<div class="col-md-4">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4><i class="fa fa-lock"></i>  login</h4>
		</div>
		<div class="panel-body">
			<?php echo form_open('/auth/login');?>
				<input type="text" placeholder="username" class="form-control " name="_name"  />
				<br/>
				<input type="password" placeholder="password" class="form-control " name="_pass"  />
				<br/>
				<input type="submit" name="login" class="btn btn-success" value="login" />
			<?php echo form_close();?>
		</div>
	</div>
</div>
<div class="col-md-4"></div>
