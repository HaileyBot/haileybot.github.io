<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
	<title>Nokta - Dashboard</title>
	<!-- Bootstrap -->
	<link href="<?php echo base_url();?>/assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="<?php echo base_url();?>/assets/css/dashboard/style.css" rel="stylesheet">
	<link href="<?php echo base_url() ?>assets/css/font-awesome.min.css" rel="stylesheet">
  <script src="<?php echo base_url() ?>assets/js/jquery.min.js"></script>
</head>
<body>
	<header>
		<!-- -->
		<nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <!-- fluid -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Dashboard</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul class="nav navbar-nav">
            <button type="button" style="margin-top:9px;" class="btn btn-success" data-toggle="modal" data-target="#add_joke"><i class="fa fa-plus"></i> Add New joke</button>

            <button type="button" style="margin-top:9px;" class="btn btn-warning" data-toggle="modal" data-target="#delete_joke"><i class="fa fa-trash"></i> Delete Joke</button>

          </ul>
          <ul class="nav navbar-nav navbar-right">       

            <li class="dropdown user-dp">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i><span class="caret"></span</a>

              <ul class="dropdown-menu">
                <li><a href="<?php echo base_url();?>/dashboard/settings"><i class="fa fa fa-gear"></i> General Settings</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="<?php echo base_url();?>/dashboard/change_password"><i class="fa fa fa-key"></i> change password</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="<?php echo base_url();?>/dashboard/change_admin_name"><i class="fa fa fa-user"></i> change username</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="<?php echo base_url();?>/auth/logout"><i class="fa fa-power-off"></i> logout</a></li>
              </ul>
            </li>  
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </header>
  <!-- add joke MODAl -->

  <!-- Button trigger modal -->
  <!-- Modal -->
  <div class="modal fade" id="add_joke" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel"><i class="fa fa-plus"></i> Add New joke</h4>
        </div>
        <div class="modal-body">
          <?php echo form_open('/dashboard/add_joke');?>
          
          <br/>
          <input class="form-control" type="text" name="title" placeholder="title" />
          <br/>
          <textarea class="form-control" placeholder="joke" name="joke" style=""></textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <input type="submit" class="btn btn-primary" value="save" />
        </div>
        <?php echo form_close();?>
      </div>
    </div>
  </div>


  <!-- Delete Joke Moddal-->
    <div class="modal fade" id="delete_joke" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel"><i class="fa fa-trash"></i> Delete joke</h4>
        </div>
        <div class="modal-body">
          <?php echo form_open('/dashboard/delete_joke');?>
          
          <br/>
          <input class="form-control" required="" type="number" name="joke_id" placeholder="Joke ID" />
          <br/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <input type="submit" class="btn btn-primary" value="Delete" />
        </div>
        <?php echo form_close();?>
      </div>
    </div>
  </div>
