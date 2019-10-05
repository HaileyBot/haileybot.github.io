<div class="col-md-3"></div>
<div class="col-md-6">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4><i class="fa fa fa-gear"></i> General Settings </h4>
		</div>
		<!--<form method="post" action="{site_url}/dashboard/save_settings" >-->
			<?php echo form_open('/dashboard/save_settings');?>
			<div class="panel-body">

				<div class="form-group">
					<label for="site_name">Site Name</label>
					<input name="site_name" class="form-control" id="site_name" value="{site_name}" type="text">
				</div>

				<div class="form-group">
					<label for="site_mail">Email</label>
					<input name="site_mail" class="form-control" id="site_mail" value="{site_mail}" type="text">
				</div>

				<div class="form-group">
					<label for="site_desc">SEO description</label>
					<textarea name="site_desc" class="form-control" id="site_desc" rows="3">{site_desc}</textarea>
				</div>

				<div class="form-group">
					<label for="site_keys">SEO Keywords</label>
					<textarea name="site_keys" class="form-control" id="site_keys" rows="3">{site_keys}</textarea>
				</div>
				
				<div class="form-group">
					<label for="ad_code">Ad Code <small>(add ad code here like google adsense code or html code.)</small> </label>
					<textarea name="ad_code" class="form-control" id="ad_code" rows="3">{ad}</textarea>
				</div>

				<!-- Social Media -->
				<h5><b>Social Media</b></h5>

				<div class="input-group">
					<span class="input-group-addon" id="facebook"><i class="fa fa-facebook"></i></span>
					<input name="facebook" type="text" value="{facebook}" class="form-control" aria-describedby="facebook">
				</div>
				<br/>
				<div class="input-group">
					<span class="input-group-addon" id="twitter"><i class="fa fa-twitter"></i></span>
					<input name="twitter" type="text" value="{twitter}" class="form-control" aria-describedby="twitter">
				</div>
				<br/>
				<div class="input-group">
					<span class="input-group-addon" id="googleplus"><i class="fa fa-google-plus"></i></span>
					<input name="googleplus" type="text" value="{googlep}" class="form-control" aria-describedby="googleplus">
				</div>

				<!-- END / Social Media -->
			</div>
			<div class="panel-footer">
				<!--<input  class="btn btn-success" type="submit" name="update" value="save" />-->
				<button class="btn btn-success" type="submit" name="update"><i class="fa fa-save"></i> save</button>
			</div>
		<!--</form>-->
		<?php echo form_close();?>
	</div>
</div>
<div class="col-md-3"></div>