<div class="container">
	<div class="wrapper">
		<div class="col-md-2"></div>
		<div class="col-md-8">
				<center>
					{ad}
				</center>
			<!-- Modal -->
			<div class="modal fade" id="url_sahre" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title" id="myModalLabel">Fact Link</h4>
						</div>
						<div class="modal-body">
						<input type="url" value="{base_url}{id}" class="form-control link-input" />
						</div>

					</div>
				</div>
			</div>
			<!-- MODAL-->
			<div class="content">
				<div class="joke_box"> 
					<p>{joke}</p>
 				</div>
				<div class="show_new">
					<center>
						<a class="btn btn-success show_new_" href='{base_url}' >Show New Fact</a>
						<button type="button" title="Get Fact URL" class="btn btn-success share_btn" data-toggle="modal" data-target="#url_sahre">
							<i class="fa fa-link"></i>
						</button>

						<a target='_blank' data-toggle="tooltip" data-placement="top" title="Share" class="btn btn-success share_btn" href='https://www.facebook.com/sharer/sharer.php?u={base_url}{id}&quote={joke}' >
						<i class="fa fa-facebook"></i>
						</a>
						<a target='_blank' data-toggle="tooltip" data-placement="top" title="Tweet" class="btn btn-success share_btn" href='https://twitter.com/intent/tweet?source={base_url}{id}&text={joke}' >
						<i class="fa fa-twitter"></i></a>
						<a target='_blank' data-toggle="tooltip" data-placement="top" title="Share"  class="btn btn-success share_btn" href='https://plus.google.com/share?url={base_url}{id}' >
						<i class="fa fa-google-plus"></i></a>

						<a target='_blank' data-toggle="tooltip" data-placement="top" title="Share via whatsapp"  class="btn btn-success share_btn" href='whatsapp://send?text={joke}' >
						<i class="fa fa-whatsapp"></i></a>

					</center>
				</div>
			</div>
			<br/><br/><br/>
			<div class="ad">
				<center>
					{ad}
				</center>
			</div>
			<div class="col-md-2"></div>
		</div>
	</div>
</div>
