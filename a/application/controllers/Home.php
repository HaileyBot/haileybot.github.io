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
 * Home Controller Class
 */

class Home extends CI_controller
{

	/**
	 * Constructor - Sets Home Controller Preferences
	 *
	 * The constructor load jokes Model and some helpers/libraries
	 *
	 * @return	void
	*/

	function __construct()
	{
		parent::__construct();

		// Load model jokes_model
		$this->load->model('jokes_model');

		// Load any other helpers/libraries needed
		$this->load->library('parser');
		$this->load->library('pagination');
	}




	/**
	 * Index Page (Show random Joke)
	 *
	 * @access public
	 * @return	void
	*/

	public function index()
	{
		
		// Get website General Settings
		$header_data            = $this->jokes_model->get_settings();

		// Get Random Joke From Database
		$joke             = $this->jokes_model->get_random_joke();



		$data = array(
	        'id'       => $joke['id'],
			'joke'     => str_replace("�","",$joke['joke']),
			'title'    => $joke['title'],
			'ad'       => $header_data['ad'],
			'base_url' => base_url()
		);

		// Show Page
		$this->parser->parse('template/header',$header_data);
		$this->parser->parse('template/home',$data);
		$this->load->view('template/footer');
	}




	/**
	 * Show Specific Joke 
	 *
	 * @access public
	 * @return	void
	 * @param  int $id
	*/

	public function Joke($id)
	{

		// Get Website General Settings
		$header_data = $this->jokes_model->get_settings();

		//Check If Article Is Exist In Our Database
		if($this->jokes_model->check_joke($id) === FALSE)
		{
			$data = array( 'class'  => 'no_results'   ,
						   // fa fa-[icon]
                           'icon'   => '',
                           // Message Content
                           'text'   => 'sorry ! Fact Not Found :( !'
			);

			// Show Page
			$this->parser->parse('template/header',$header_data);
			$this->parser->parse('template/alert',$data);
			$this->load->view('template/footer');

		}else{

			//If  Exist Then

			// Get Joke Data Using Joke ID
			$joke = $this->jokes_model->get_joke($id);

			$data = array(
				'joke' => str_replace("�","",$joke['joke']),
				'id'   => $joke['id'],
				'ad'   => $header_data['ad'],
				'base_url' => base_url()
			);

			// Show Joke Page
			$this->parser->parse('template/header',$header_data);
		    $this->parser->parse('template/joke',$data);
		    $this->load->view('template/footer');
		}

	}

	

	/**
	 * Show Search Result
	 *
	 * @access public
	 * @return	void
	*/
	public function search()
	{
		// Get The Search Query Using GET REQUIST

		$query = $this->input->get('title',TRUE);

		// if the query is empty or not set then re-direct user To Home page
		(!$query) ? redirect('home'):NULL;

		// Get General Website Settings
		$header_data = $this->jokes_model->get_settings();

		// If Results Not Found
		if ($this->jokes_model->row_search_result($query) ==0)
		{
			// Set The Message Parameters (error message)
			$data = array( 'class'  => 'no_results'   ,
						   // fa fa-[icon]
                           'icon'   => 'fa fa-warning',
                           // Message Content
                           'text'   => 'sorry ! there is no results :( !'
			);

			// Show Page
			$this->parser->parse('template/header',$header_data);
			$this->parser->parse('template/alert',$data);
			$this->load->view('template/footer');

		}else{

		$config = array();

		// Set base url
		$config["base_url"] = base_url() . "home/search";
		$config['suffix'] = '?' . http_build_query($_GET, '', "&");

		// Get Total Rows
		$config["total_rows"] = $this->jokes_model->row_search_result($query);

		// Set Per Page
		$config["per_page"] = 10;

		// set Uri Segment
		$config["uri_segment"] = 3;

		// initialize Pagination
       	$this->pagination->initialize($config);

		$page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;

		// Get Results
		$data["results"] = $this->jokes_model->fetch_jokes($config["per_page"], $page,$query);

		// Create Pagination links
		$data["links"] = $this->pagination->create_links();

		// Get Search query
		$data["query"] = $query;

		// Show Page
		$this->parser->parse('template/header',$header_data);
		$this->parser->parse('template/search_result',$data);
		$this->load->view('template/footer');

		}
	}
}
