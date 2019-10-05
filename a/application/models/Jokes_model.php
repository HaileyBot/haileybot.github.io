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
 * Jokes model Class
 */

class Jokes_model extends CI_Model {
	
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
	 * Get Joke Data by ID
	 *
	 * @return	void
	*/
	function get_joke($id)
	{
		$this->db->select('*');
		$this->db->from('jokes');
		$this->db->where('id',intval($id));

		return $this->db->get()->row_array();
	}

	public function check_joke($id)
	{
		$this->db->select('id');
		$this->db->from('jokes');
		$this->db->where('id',intval($id));
		if ($this->db->get()->num_rows() == 0)
		   {return false;}
		   else
		   {return true;}
	}


	function get_random_joke()
	{
		$this->db->select('*');
		$this->db->from('jokes');
		$this->db->order_by('id', 'RANDOM');
		$this->db->limit(1);
		return $this->db->get()->row_array();

	}

	public function row_search_result($q)
	{
		$this->db->select('*');
		$this->db->from('jokes');
		$this->db->like('title',$q);
		return $this->db->get()->num_rows();
	}

	public function search($q)
	{
		$this->db->select('*');
		$this->db->from('jokes');
		$this->db->like('title',$q);
		//$this->db->limit(10);
		return $this->db->get()->result_array();
	}

	public function fetch_jokes($limit, $start,$q)
	{
		$this->db->limit(intval($limit), intval($start));
    	$this->db->like('title',$q);
		$this->db->order_by("id", "desc");
		$query = $this->db->get("jokes");


		if ($query->num_rows() > 0) {
			foreach ($query->result() as $row) {
				$data[] = $row;

			}
			
			return $data;
		}
		return false;
	}









}