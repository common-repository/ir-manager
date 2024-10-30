<?php 
if ( ! defined( 'ABSPATH' ) ) exit;
$meta = get_post_meta( 1 );
$ir_violation_get_content="";
if(!empty($meta["irmngr_violation"])){
  foreach ($meta["irmngr_violation"] as $key => $value) {
    $Domain_=str_replace("www.", "", $_SERVER['HTTP_HOST']);
     if(!empty($value)){
      if (preg_match("/" . $Domain_ . "/", $value)){
            $urls='"'.$value.'"';
            $ir_violation_get_content.= "<li>".@$value."</li>"; 
      }      
    }        
  }
}
if(!empty($meta["irmngr_violation_user"])){
  foreach (@$meta["irmngr_violation_user"] as $key => $value) {
    $Domain_=str_replace("www.", "", $_SERVER['HTTP_HOST']);
    if(!empty($value)){
      if (preg_match("/" . $Domain_ . "/", $value)){
      $urls='"'.$value.'"';
      $ir_violation_get_content.= "<li><form method='POST'>";  
      $ir_violation_get_content.= wp_nonce_field( 'ir_mngr_remove_viol_form_submit', 'ir_mngr_remove_viol_form_nonce' );
      $ir_violation_get_content.=" <input type='hidden' id=".$urls." name='ir_remove_violation_t' value=".$urls.">".@$value."<span id='hardcoded-badge'></span><input type='submit' name='ir_remove_violation_btn' value='X' class='btn_remove_website' style='opacity:;'></form></li>";
      }
    }
  }
}
 ?>