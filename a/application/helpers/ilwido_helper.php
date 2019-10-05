<?php 
if ( ! defined('BASEPATH')) exit('No direct script access allowed');




function get_config_var($key)
{
	$CI =& get_instance();
	$CI->load->model('Common_model');
	$config = $CI->Common_model->get_website_config($key);
	return $config['config_value'];
}
function show_message($type,$msg , $title = "")
{
	return '
	
	<div class="alert alert-'.$type.' alert-dismissable">
	<i class="fa fa-check"></i>
		<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
	<b>'.$title.'</b> '.$msg.'
</div>';
}
function is_login(){

	$CI =& get_instance();
	if ($CI->session->userdata['is_login'] == FALSE)
		{
			$to = base_url('/auth/login');
			redirect($to);
			exit();
		}
}
function is_login__($type)
{
	$CI =& get_instance();
	if (@$CI->session->userdata['loginSess'] == FALSE || @$CI->session->userdata['loginSess']['type'] != $type)
	{
		$to = base_url('/auth/login');
		redirect($to);
		die("Sorry but you don't have permission to access this page ! ");
		exit();
	}
}

function getUserId(){

	$CI =& get_instance();
	return $CI->session->userdata['loginSess']['id'];
}


//13436714242

if( ! function_exists('relative_time'))
{
    function relative_time($datetime)
    {
        $CI =& get_instance();
        $CI->lang->load('date');

        if(!is_numeric($datetime))
        {
            $val = explode(" ",$datetime);
           $date = explode("-",$val[0]);
           $time = explode(":",$val[1]);
           $datetime = mktime($time[0],$time[1],$time[2],$date[1],$date[2],$date[0]);
        }

        $difference = time() - $datetime;
        $periods = array("second", "minute", "hour", "day", "week", "month", "year", "decade");
        $lengths = array("60","60","24","7","4.35","12","10");

        if ($difference > 0) 
        { 
            $ending = $CI->lang->line('date_ago');
        } 
        else 
        { 
            $difference = -$difference;
            $ending = $CI->lang->line('date_to_go');
        }
        for($j = 0; $difference >= $lengths[$j]; $j++)
        {
            $difference /= $lengths[$j];
        } 
        $difference = round($difference);

        if($difference != 1) 
        { 
            $period = strtolower($CI->lang->line('date_'.$periods[$j].'s'));
        } else {
            $period = strtolower($CI->lang->line('date_'.$periods[$j]));
        }

        return "$difference $period $ending";
    }


} 



?>