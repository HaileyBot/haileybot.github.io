<?php
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * This script is not freeware nor shareware, Please do not distribute it by any way
 *
 * Copyright (c) 2016, Ilwido
 *
 * @package		BASMATI
 * @author		Ilwido (Yassine Bousbaa)
 * @copyright	Copyright (c) 2016, ilwido
 * @link		http://www.ilwido.net
 * @version		Version 1.0.0
 */




/**
 * Dashboard Controller Class
 * easy and simple dashboard
 */

class Dashboard extends CI_controller
{

	/**
	 * Constructor - Sets Dashboard Controller Preferences
	 * The constructor load admin_model Model and some helpers/libraries
	 * @return	void
	*/
	function __construct()
	{
		parent::__construct();
		//load admin_model
		$this->load->model('admin_model');
		// Load any other helpers/libraries needed
		$this->load->library('parser');
		$this->load->library('session');

		// Check If there is a session 
		if (@$this->session->userdata['is_login_j'] == FALSE)
		{
			redirect('auth/login');
			exit();
		}
	}

	/**
	 * index page redirect to settings page
	 *
	 * @return	void
	*/

	public function index()
	{
		redirect('dashboard/settings');
	}


	/**
	 * add Joke 
	 *
	 * @return	void
	*/

	public function add_joke()
	{
		// Load Form Validation Library
		$this->load->library('form_validation');

		
		$this->form_validation->set_rules('joke', 'Joke', 'required');
		$this->form_validation->set_rules('title', 'Title', 'required');

		// Check if fields are valid (If The Site Name Not Empty )
		if ($this->form_validation->run() === FALSE)
		{
			//validation_errors();

			$data = array(
					// The form validation errors !
				    'msg'   => validation_errors('<div class="alert alert-warning"><i class="fa fa-warning"></i>','</div>'),
				    'icon'  =>  '',
				    'text'   => '',
				    // Set a Back Url To Edit The inputs.
				    'back_url' => base_url().'dashboard/settings'
			);

			$this->load->view('dashboard/header');
			$this->parser->parse('dashboard/alert',$data);
			$this->load->view('dashboard/footer');

		}else{

			//Insert Joke To database
			$this->admin_model->add_joke();
			
			$data = array(
					// The form validation errors !
				    'msg'   => '',
				    'type'  => 'alert alert-success',
				    'icon'  =>  'fa fa-ok',
				    'text'   => 'the joke has been added !',
				    // Set a Back Url To Edit The inputs.
				    'back_url' => base_url().'dashboard/settings'
			);

			$this->load->view('dashboard/header');
			$this->parser->parse('dashboard/alert',$data);
			$this->load->view('dashboard/footer');
		}
	}

	public function delete_joke()
	{
		$joke_id = $this->input->post('joke_id');
		if ($joke_id == "" or !$joke_id)
		{
			$data = array(
					// The form validation errors !
				    'msg'   => '',
				    'icon'  =>  '',
				    'text'   => '<div class="alert alert-warning"><i class="fa fa-warning"></i>Please Insert The Joke Id</div>',
				    // Set a Back Url To Edit The inputs.
				    'back_url' => base_url().'dashboard/settings'
			);

			$this->load->view('dashboard/header');
			$this->parser->parse('dashboard/alert',$data);
			$this->load->view('dashboard/footer');
		}else{
			//Delete Joke
			$this->admin_model->delete_joke($joke_id);
			
			$data = array(
					// The form validation errors !
				    'msg'   => '',
				    'type'  => 'alert alert-success',
				    'icon'  =>  'fa fa-ok',
				    'text'   => 'the joke has been removed !',
				    // Set a Back Url To Edit The inputs.
				    'back_url' => base_url().'dashboard/settings'
			);

			$this->load->view('dashboard/header');
			$this->parser->parse('dashboard/alert',$data);
			$this->load->view('dashboard/footer');
		}
		
	}
	
	/**
	 * show settings page
	 *
	 * @return	void
	*/
	
	public function settings()
	{
		// Get Settings Function from admin_model
		$data = $this->admin_model->get_settings();

		$data['site_url'] = base_url();

		$this->load->view('dashboard/header');

		$this->parser->parse('dashboard/settings',$data);

		$this->load->view('dashboard/footer');

	}


	/**
	 * update settings 
	 *
	 * @return	void
	*/
	public function save_settings()
	{
		// Load Form Validation Library
		$this->load->library('form_validation');

		// Set Form Validation Rules (In this Cas The Most Inportant Field Is The site Name [only])
		$this->form_validation->set_rules('site_name', 'Website Name', 'required');

		// Check if fields are valid (If The Site Name Not Empty )
		if ($this->form_validation->run() === FALSE)
		{
			//validation_errors();

			$data = array(
					// The form validation errors !
				    'msg'   => validation_errors('<div class="alert alert-warning"><i class="fa fa-warning"></i>','</div>'),
				    'icon'  =>  '',
				    'text'   => '',
				    // Set a Back Url To Edit The inputs.
				    'back_url' => base_url().'dashboard/settings'
			);

			$this->load->view('dashboard/header');
			$this->parser->parse('dashboard/alert',$data);
			$this->load->view('dashboard/footer');

		}else{

			//Update Settings model
			$this->admin_model->update_settings();
			// Reload page
			redirect('dashboard/settings');
		}
	}

	/**
	 * change password page
	 *
	 * @return	void
	*/
	public function change_password()
	{
	  	
	  	// Check if there is a POST request	
		if ($this->input->post('save'))
		{

			$get_current_password = $this->admin_model->get_admin_password();
	  		$current_password = $get_current_password ['login_pass'];

	  		// Load form validation library
		    $this->load->library('form_validation');

		    // Set form validation rules, [current_password] [new_password] [confirm_new_password]
			$this->form_validation->set_rules('current_pass', 'Username', 'required');
			$this->form_validation->set_rules('new_pass', 'Password', 'required');
			$this->form_validation->set_rules('re_new_pass', 'Password', 'required');


			// Check if all fields are NOT empty
			if ($this->form_validation->run() == FALSE)
			{
				//nothing To do :)
				redirect('dashboard/change_password');
			}
			
			elseif (md5($this->input->post('current_pass')) != $current_password)
			{
				// Set Error Message 
				$data['type'] = 'alert alert-danger';
				$data['text'] = 'Your current password is wrong , Please try again.';
				$data['icon'] = 'fa fa-alert';
				$data['msg']  = '';
				$data['back_url'] = 'change_password';

				// Show error message page
				$this->load->view('dashboard/header');
				$this->parser->parse('dashboard/alert',$data);
				$this->load->view('dashboard/footer');
			}

			elseif ($this->input->post('new_pass') != $this->input->post('re_new_pass') ) {
				
				// Set Error Message 
				$data['type'] = 'alert alert-danger';
				$data['text'] = 'Please Confirm Your New Password.';
				$data['icon'] = 'fa fa-alert';
				$data['msg']  = '';
				$data['back_url'] = 'change_password';

				// Show error message page
				$this->load->view('dashboard/header');
				$this->parser->parse('dashboard/alert',$data);
				$this->load->view('dashboard/footer');
			}
			else{

				// Update Password
				$done = $this->admin_model->change_password();
				
				// Set Success Message 
				$data['type'] = 'alert alert-success';
				$data['text'] = 'DONE ! Your password has been changed .';
				$data['icon'] = '';
				$data['msg']  = '';
				$data['back_url'] = 'change_password';

				// Show Success message page
				$this->load->view('dashboard/header');
				$this->parser->parse('dashboard/alert',$data);
				$this->load->view('dashboard/footer');
				
			}
		}
		else
		{
			
			//echo md5("ilwido");
			// Show Chane password page if there is no post requist
			$this->load->view('dashboard/header');
			$this->load->view('dashboard/change_password');
			$this->load->view('dashboard/footer');
		}
		
	}


	/**
	 * change username/loginname page
	 *
	 * @return	void
	*/
	public function change_admin_name()
	{
		// Check if there is a POST request	
		if ($this->input->post('save'))
		{
			
			// Load form validation library
		    $this->load->library('form_validation');

		    // Set form validation rules
			$this->form_validation->set_rules('new_admin_name', 'Username', 'required');
			
			// Check if fields are Not empty
			if ($this->form_validation->run() == FALSE)
			{
				//nothing To do :)
				redirect('dashboard/change_admin_name');
			}
			else
			{
				// Change Password 
				$this->admin_model->change_admin_name();

				// Set Success Message
				$data['type'] = 'alert alert-success';
				$data['text'] = 'DONE ! Your name has been changed .';
				$data['icon'] = '';
				$data['msg']  = '';
				$data['back_url'] = 'change_admin_name';

				// Show Success message page
				$this->load->view('dashboard/header');
				$this->parser->parse('dashboard/alert',$data);
				$this->load->view('dashboard/footer');
				

			}
		}
		else
		{
			// Show page 
			$this->load->view('dashboard/header');
			$this->load->view('dashboard/change_admin_name');
			$this->load->view('dashboard/footer');
		}
	}
}
