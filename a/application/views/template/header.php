<?php


function random_pic($dir, $nf=3)
{
    $files = glob($dir . DIRECTORY_SEPARATOR . '*.jpg');
    shuffle($files);
    return array_pop($files);
}
//$number = rand(); ?v=$number
$path = 'images';
$file_1 = random_pic($path, 1);
$image  = file_get_contents($file_1);
$og_img = base64_encode($image); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>{site_name} - Country Facts</title>
	<meta name="description" content="{site_desc}" />
	<meta name="keywords" content="{site_keys}" />
    <meta name="twitter:card" value="summary"> 
    <meta property="fb:app_id" content="Your Facebook App ID" />
    <meta property="og:title" content="This is your original country" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="http://YourDomain.com" />
    <meta property="og:image" content="http://YourDomain.com/<?php echo $file_1 ?>" />
    <meta property="og:description" content="Liked it? Click Here for Epic Country Facts."/>
    <meta property="og:site_name" content="YourDomain.com - What is your original country?"/>	
	<link href="<?php echo base_url();?>assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="<?php echo base_url();?>assets/css/style.css" rel="stylesheet">
	<link href="<?php echo base_url() ?>assets/css/font-awesome.min.css" rel="stylesheet">
	<script src="<?php echo base_url() ?>assets/js/jquery.min.js"></script>
    <!-- Your Google Analytics Script right here -->
</head>
<body>
	<header>
	-
		<nav class="navbar navbar-default top-vav">
			<div class="container">
				<div class="container-fluid">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="http://YourDomain.com"><div style="font-size: 20pt; font-family: Calibri, sans-serif;display:inline;">YourDomain.com</div></a>
					</div>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">							
							<form action="<?php echo base_url();?>/home/search/" method="GET" class="navbar-form search navbar-right" role="search">
								<div class="input-group">
									<input type="text" class="form-control" name="title" placeholder="Search...">
									<span class="input-group-btn">
										<button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>										 
									</span>
								</div>
							</form>
						<ul class="nav social_media navbar-nav navbar-right">	  	  
							<li><a href="{facebook}"><span class="fa fa-facebook"></span></a></li>
							<li><a href="{twitter}"><span class="fa fa-twitter"></span></a></li>
							<li><a href="{googlep}"><span class="fa fa-google-plus"></span></a></li>
										    <li><a href="http://YourDomain.com/privacypolicy.html" data-original-title="Privacy Policy">Privacy Policy</a></li>
			   <li> <a href="http://YourDomain.com/termsofuse.html" data-original-title="Terms Of Use">Terms of Use</a></li>
						</ul>
					</div><!-- /.navbar-collapse -->
				</div><!-- /.container-fluid -->
			</div>
		</nav>
	</header>
