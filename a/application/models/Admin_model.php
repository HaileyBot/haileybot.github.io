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
 * Admin modle Class
 */

class Admin_model extends CI_Model {
	
	/**
	 * Constructor - Sets Dashboard Controller Preferences
	 * The constructor loadsome helpers/libraries
	 * @return	void
	*/
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}


	/**
	 * Get settings
	 *
	 * @return	void
	*/
	function get_settings()
	{
		$this->db->select('*');
		$this->db->from('settings');
		$this->db->limit(1);
		return $this->db->get()->row_array();
	}

	/**
	 * Add New Joke To database
	 *
	 * @return	void
	*/
	public function add_joke()
	{

		$data = array(
			'joke' 		=> $this->input->post('joke'),
			'title'          => $this->input->post('title')
			
			);

		return $this->db->insert('jokes', $data);
	}

	/**
	 * Delete Joke
	 *
	 * @return	void
	*/
	public function delete_joke($id)
	{

		$this->db->where('id',$id);

		return $this->db->delete('jokes');
	}




	/**
	 * Update settings
	 *
	 * @return	void
	*/

	public function update_settings()
	{
		$this->db->update('settings',
			array(
				'site_name'   => $this->input->post('site_name') ,
				'site_mail'   => $this->input->post('site_mail') ,
				'site_desc'   => $this->input->post('site_desc') ,
				'site_keys'	  => $this->input->post('site_keys') ,
				'ad' 		  => $this->input->post('ad_code')   ,
				'facebook' 	  => $this->input->post('facebook')  ,
				'twitter' 	  => $this->input->post('twitter')   ,
				'googlep' 	  => $this->input->post('googleplus')
			)
		);
	}

	/**
	 * Get admin password
	 *
	 * @return	void
	*/
	public function get_admin_password()
	{
		$this->db->select('login_pass');
		$this->db->from('admin');
		$this->db->limit('1');
		return $this->db->get()->row_array();
	}

	/**
	 * change password
	 *
	 * @return	void
	*/
	public function change_password()
	{
		$this->db->update('admin',
			array(
				'login_pass' 			=> md5($this->input->post('new_pass'))
				)
			);
	}

	/**
	 * change admin name and login name
	 *
	 * @return	void
	*/
	public function change_admin_name()
	{
		$this->db->update('admin',
			array(
				'name' 			=> $this->input->post('new_admin_name'),
				'login_name'			=> md5($this->input->post('new_admin_name'))
				)
			);
	}

	 

	/**
	 * login / check username and password if existe in database
	 *
	 * @access public
	 * @return	True/false
	 * @param  string $username
	 * @param  string $password
	*/
	public function login($username,$password)
	{
		$where = "login_name='".md5($username)."' AND login_pass='".$password."'";
		$this->db->select('*');
		$this->db->from('admin');
		$this->db->where($where);
		$this->db->limit(1);

		$q = $this->db->get();

		if ($q->num_rows() == 1) 
		{
			return true;

		}else{

			return false;
		}
	}
}