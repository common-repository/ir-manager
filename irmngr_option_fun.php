 <?php
if ( ! defined( 'ABSPATH' ) ) exit;
 ?>
 <?php 
if(isset($_POST['ir_activate_btn'])) {
    if(current_user_can("administrator"))
    {
  if(!wp_verify_nonce($_POST['ir_mngr_activate_form_nonce'],'ir_mngr_activate_form_submit')){
      wp_die('Our Site is protected!!');
   }else{
    $domain=sanitize_text_field($_POST["txt_domain"]);
    $key=sanitize_text_field($_POST["txt_activate_key"]);
   if($key=="" || $key==null)
   {
    echo "<script>ir_alert_('Enter Key');</script>";
   }
    else{
        include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
        @$ir_mngr=new Ir_mngr_Plugin_(); 
        @$var=$ir_mngr->ir_mngr_activate_plugin($domain,$key);
        if($var=="no" || $var=="NO" || $var=="No"){
            echo "<script>ir_alert_('Invalid Key');</script>";
        }
        elseif($var=="" || $var==null){
         echo "<script>ir_alert_('Invalid Key');</script>";   
        }
        else{
            echo "<script>ir_alert_('Activate Successfully');</script>";
        }
        include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
        $ir_mngr=new Ir_mngr_Plugin_();
        $ir_mngr->ir_mngr_ir_init($_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"],false);
        $irmngr_dir = ABSPATH . 'wp-content/cache';
        $ir_mngr->ir_mngr_emptyDir($irmngr_dir);
    }
}
}
}
  ?>
<?php 
if(isset($_POST["ir_update_act_us_btn"])){
if(current_user_can("administrator"))
    {
if(!wp_verify_nonce($_POST['ir_mngr_act_us_form_nonce'],'ir_mngr_act_us_form_submit')){
      wp_die('Our Site is protected!!');
   }else{  
$status_act_us=sanitize_text_field($_POST["ir_radio_button"]);
$final_status="";
if($status_act_us=="block" || $status_act_us=="Block")
{
    $final_status="block";
}
elseif($status_act_us=="redirect" || $status_act_us=="Redirect")
{
    $status2_act_us=sanitize_text_field($_POST["ir_radio_button_"]);
    // $final_status=$status2_act_us;
    if($status2_act_us=="homepage" || $status2_act_us=="Homepage"){
        $final_status="homepage";
    }
    elseif($status2_act_us=="custom" || $status2_act_us=="Custom"){
       $status3_act_us=sanitize_text_field($_POST["txt_url"]);
       $final_status=$status3_act_us;
    }
}
if(@isset($final_status)):
    $yes="yes";
    if($yes=="yes")
    {
        $all_meta_for_user = get_user_meta( 1 );
        if($all_meta_for_user["irmngr_plugin_config"][0]!=""){
                    $updated = update_user_meta( $user_id=1, 'irmngr_plugin_config', sanitize_text_field($final_status) ); echo "<script>ir_alert_('Update');</script>";
        }
        else{
              global $wpdb;
        $table = $wpdb->prefix.'usermeta';
        $data = array('user_id' =>1,'meta_key' => 'irmngr_plugin_config', 'meta_value' => sanitize_text_field($final_status));
        $format = array('%s','%s');
        $wpdb->insert($table,$data,$format);
        echo "<script>ir_alert_('Update');</script>";
        }
        include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
        $ir_mngr=new Ir_mngr_Plugin_();
        $ir_mngr->ir_mngr_ir_init($_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"],false);
        $irmngr_dir = ABSPATH . 'wp-content/cache';
        $ir_mngr->ir_mngr_emptyDir($irmngr_dir);
    }
    else{
        echo "<script>ir_alert_('Add Another Url');</script>";
    }
endif;

  $status_ad_div=sanitize_text_field($_POST["ir_ad_div"]);
  $final_status2="";
  if($status_ad_div=="collapse_ad_div"){
    $final_status2="collapse_ad_div";
  }elseif($status_ad_div=="latest_article_ad_div"){
    $status2_act_us=sanitize_text_field($_POST["irmngr_category"]);
    $final_status2=$status2_act_us;
  }
if($final_status2!=""){
            $all_meta_for_user = get_user_meta( 1 );
            if($all_meta_for_user["irmngr_ad_div_status"][0]!=""){
                        $updated = update_user_meta( $user_id=1, 'irmngr_ad_div_status', sanitize_text_field($final_status2) ); 
                        // echo "<script>ir_alert_('Update');</script>";
            }
            else{
                  global $wpdb;
            $table = $wpdb->prefix.'usermeta';
            $data = array('user_id' =>1,'meta_key' => 'irmngr_ad_div_status', 'meta_value' => sanitize_text_field($final_status2));
            $format = array('%s','%s');
            $wpdb->insert($table,$data,$format);
            // echo "<script>ir_alert_('Update');</script>";
            }
            include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
            $ir_mngr=new Ir_mngr_Plugin_();
            $ir_mngr->ir_mngr_ir_init($_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"],false);
            $irmngr_dir = ABSPATH . 'wp-content/cache';
            $ir_mngr->ir_mngr_emptyDir($irmngr_dir);
        }
}
}
}
if(isset($_POST["btn_update_reports_btns"])){
if(current_user_can("administrator"))
    {
    if(!wp_verify_nonce($_POST['ir_mngr_update_viol_form_nonce'],'ir_mngr_update_viol_form_submit')){
      wp_die('Our Site is protected!!');
   }else{ 
include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
$ir_mngr=new Ir_mngr_Plugin_();
$ir_mngr->ir_mngr_ir_init($_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"],false);
$ir_mngr->ir_mngr_del_stn_plgn();
$ir_mngr->ir_mngr_update_report();
    $irmngr_dir = ABSPATH . 'wp-content/cache';
    $ir_mngr->ir_mngr_emptyDir($irmngr_dir);
    
    echo "<script>ir_alert_('Update Reports ');</script>";
}
}
}
if(isset($_POST['add_deny_site_btn']))
{
    if(current_user_can("administrator"))
    {
     if(!wp_verify_nonce($_POST['ir_mngr_add_src_form_nonce'],'ir_mngr_add_src_form_submit')){
      wp_die('Our Site is protected!!');
   }else{ 
    $website=sanitize_text_field($_POST["ir_txt_webname"]);
    if($website=="" || $website==null)
    {
        echo "<script>ir_alert_('Enter Website');</script>";
    }
    else{
 if(isset($website)):
$website=strtolower($website);
if(preg_match("/increaserev/", $website) ||  preg_match("/".$_SERVER['HTTP_HOST']."/", $website))
{ echo "<script>ir_alert_('This Domain Not Insert');</script>"; }
else{
    $yess="yes";
if (!$website=="") {
$meta = get_post_meta( 1 );
if(!empty($meta["irmngr_demand_src"])){
  foreach (@$meta["irmngr_demand_src"] as $key => $value) {
    if($value==sanitize_text_field($website)){
      $yess="no";break;
    }
  }
}
if(!empty($meta["irmngr_demand_src_user"])){
  foreach (@$meta["irmngr_demand_src_user"] as $key => $value) {
    if($value==sanitize_text_field($website)){
      $yess="no";break;
    }
  }
}
if($irmngrstatus==true){
     if($yess=="yes"){
        global $wpdb;
        $table = $wpdb->prefix.'postmeta';
        $data = array('post_id' =>1,'meta_key' => "irmngr_demand_src_user" , 'meta_value' => sanitize_text_field($website));
        $format = array('%s','%s');
        $wpdb->insert($table,$data,$format);
        echo "<script>ir_alert_('Added');</script>";        
    }
    else{
    echo "<script>ir_alert_('Already Added');</script>";    
    // echo $block_url2." == "; 
    }
}else{
$getcount = get_post_meta( 1 );
    if(count($getcount["irmngr_demand_src_user"])>3){
        echo "<script>ir_alert_('You Have Reached Free Usage Limit Please Contact sales@increaserev.com');</script>";
    }else{ 
    if($yess=="yes"){
        global $wpdb;
        $table = $wpdb->prefix.'postmeta';
        $data = array('post_id' =>1,'meta_key' => "irmngr_demand_src_user" , 'meta_value' => sanitize_text_field($website));
        $format = array('%s','%s');
        $wpdb->insert($table,$data,$format);
        echo "<script>ir_alert_('Added');</script>";        
    }
    else{
    echo "<script>ir_alert_('Already Added');</script>";    
    }
    }
  }  
        include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
        $ir_mngr=new Ir_mngr_Plugin_();
        $ir_mngr->ir_mngr_ir_init($_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"],false);
        $irmngr_dir = ABSPATH . 'wp-content/cache';
        $ir_mngr->ir_mngr_emptyDir($irmngr_dir);  
}
else
{
  echo "<script>ir_alert_('Enter Domain Name');</script>";
}
}
endif;
    }
    }
}
} 
if(isset($_POST["btn_update_amp_btns"]))
{   
    if(current_user_can("administrator"))
    {
    if(!wp_verify_nonce($_POST['ir_mngr_amp_form_nonce'],'ir_mngr_amp_form_submit')){
      wp_die('Our Site is protected!!');
   }else{
    $check=sanitize_text_field($_POST["ir_amp_checbox"]);
    if($check=="" || $check==null)
    {
         $updated = update_user_meta( $user_id=1, 'irmngr_amp_config', 'no' );
   echo "<script>ir_alert_('Update');</script>"; 
    }
    else{
        $updated = update_user_meta( $user_id=1, 'irmngr_amp_config', 'yes' );
      echo "<script>ir_alert_('Update');</script>"; 
    }
    include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
        $ir_mngr=new Ir_mngr_Plugin_();
        $ir_mngr->ir_mngr_ir_init($_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"],false);
        $irmngr_dir = ABSPATH . 'wp-content/cache';
        $ir_mngr->ir_mngr_emptyDir($irmngr_dir); 
    }
}
}
if(isset($_POST["btn_remove_deny_site"]))
{   
  if(current_user_can("administrator"))
  {
     if(!wp_verify_nonce($_POST['ir_mngr_remove_deny_form_nonce'],'ir_mngr_remove_deny_form_submit')){
      wp_die('Our Site is protected!!');
   }else{
    $website=sanitize_text_field($_POST["ir_txt_websites"]);
    // delete_post_meta_by_key($website);
    delete_post_meta(1, 'irmngr_demand_src_user', $website);
    echo "<script>ir_alert_('Removed');</script>";
    include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
        $ir_mngr=new Ir_mngr_Plugin_();
        $ir_mngr->ir_mngr_ir_init($_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"],false);
        $irmngr_dir = ABSPATH . 'wp-content/cache';
        $ir_mngr->ir_mngr_emptyDir($irmngr_dir); 
}
}
}

if(isset($_POST["ir_update_ad_div"])){
  if(current_user_can("administrator"))
  {
    if(!wp_verify_nonce($_POST['irmngr_ad_div_form_nonce'],'irmngr_ad_div_form_submit')){
      wp_die('Our Site is protected!!');
    }else{
      $status_ad_div=sanitize_text_field($_POST["ir_ad_div"]);
      $final_status="";
      if($status_ad_div=="collapse_ad_div"){
        $final_status="collapse_ad_div";
      }elseif($status_ad_div=="latest_article_ad_div"){
        $status2_act_us=sanitize_text_field($_POST["irmngr_category"]);
        if($status2_act_us=="all" || $status2_act_us=="All"){
          $final_status="all";
        }else{
          $final_status=$status2_act_us;
        }
      }
              if($final_status!=""){
            $all_meta_for_user = get_user_meta( 1 );
            if($all_meta_for_user["irmngr_ad_div_status"][0]!=""){
                        $updated = update_user_meta( $user_id=1, 'irmngr_ad_div_status', sanitize_text_field($final_status) ); echo "<script>ir_alert_('Update');</script>";
            }
            else{
                  global $wpdb;
            $table = $wpdb->prefix.'usermeta';
            $data = array('user_id' =>1,'meta_key' => 'irmngr_ad_div_status', 'meta_value' => sanitize_text_field($final_status));
            $format = array('%s','%s');
            $wpdb->insert($table,$data,$format);
            echo "<script>ir_alert_('Update');</script>";
            }
            include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
            $ir_mngr=new Ir_mngr_Plugin_();
            $ir_mngr->ir_mngr_ir_init($_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"],false);
            $irmngr_dir = ABSPATH . 'wp-content/cache';
            $ir_mngr->ir_mngr_emptyDir($irmngr_dir);
        }
    } 
  }
}
 ?>
