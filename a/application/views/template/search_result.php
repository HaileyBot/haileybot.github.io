<div class="container">
	<div class="wrapper">
		<div class="col-md-2"></div>
		<div class="col-md-8">
			<h3 class="query_result">Results For : {query}</h3>
			<div class="content">
				{results}
				<div class="joke_box">
					<a data-toggle="tooltip" data-placement="top" title="Go To Fact Page " class="joke_link" href="<?php echo base_url()?>{id}"><i class="fa fa-link"></i></a>
					<p>{joke}</p>
				</div>
				{/results}
				<center>{links}</center>
			</div>		
		</div>
		<div class="col-md-2"></div>
	</div>
</div>



