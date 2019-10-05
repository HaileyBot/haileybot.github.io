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
 * Auth Controller Class
 */

class Auth extends CI_Controller {

	/**
	 * Constructor - Sets Auth Controller Preferences
	 *
	 * The constructor load Jokes Model and some helpers/libraries
	 *
	 * @return	void
	*/

	public function __construct()
	{
		parent::__construct();

		// Load model admin_model
		$this->load->model('admin_model');

		// Load any other helpers/libraries needed
		$this->load->helper(array('form'));
		$this->load->library('session');
		$this->load->library('parser');


	}

	/**
	 * Login Page 
	 *
	 * @return	void
	*/


	public function login()
	{
		
		//Check if user already logged in
		if (@$this->session->userdata['is_login_j'] == TRUE)
		{			
			redirect('dashboard/');
			exit();
		}
		
		// Check if there is a POST request
		if ($this->input->post('login'))
		{
			// Load form validation library
		    $this->load->library('form_validation');
		    // Set form validation rules, [username] [password]
			$this->form_validation->set_rules('_name', 'Username', 'required');
			$this->form_validation->set_rules('_pass', 'Password', 'required');
			
			
			// Check if all fields are valid
			if ($this->form_validation->run() == FALSE)
			{
				// nothing to do 
				redirect('auth/login');

			}else{


				// Get the User Name
				$name = $this->input->post('_name',TRUE);

				// Get The Password And encrypt it (For Security -_- ) 
				$pass = md5($this->input->post('_pass'));

				// Chek If The Login Data Is Valid
				$result = $this->admin_model->login($name,$pass);

				// If The Login Data is Valid 
				if ($result == TRUE)
				{
					// Set  Session
					$session_data = array('admin_name' => $name);
					$this->session->set_userdata('is_login_j', $session_data);
					// and redirect to dashboard
					redirect('dashboard/');
				
				}else{	

					$data = array( 'class'  => 'alert alert-danger' ,
						   // fa fa-[icon]
                           'icon'   => 'fa fa-warning',
                           // Message Content
                           'text'   => 'Wrong Username Or Password !'
					);

					//get The Header data
					$header_data = $this->admin_model->get_settings();
					
					// Show Page
					$this->parser->parse('template/header',$header_data);
					$this->parser->parse('template/alert',$data);
					$this->load->view('dashboard/login');
					$this->load->view('template/footer');
				}
			}


		}else{

			//get header data
			$header_data = $this->admin_model->get_settings();

			// show page
			$this->parser->parse('template/header',$header_data);
			$this->load->view('dashboard/login');
			$this->load->view('template/footer');
		}
	}

	/**
	 * Logout  
	 *
	 * @return	void
	*/

	public function logout()
	{
		//Check if user logged in
		if ($this->session->userdata['is_login_j'] == TRUE)
		{
			//Destroy The session
			session_destroy();
			redirect('auth/login');
		}
		else
		{
			redirect('auth/login');
		}
	}
}