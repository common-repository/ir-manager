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
        $ir_mngr->ir_mngr_ir_init(str_replace("www.", "", $_SERVER['HTTP_HOST']).$_SERVER["REQUEST_URI"],false);
        $irmngr_dir = ABSPATH . 'wp-content/cache';
        $ir_mngr->ir_mngr_emptyDir($irmngr_dir); 
    }
}
}
}
  ?>
<?php 
if(isset($_POST["add_violation_url_btn"]))
{
  if(current_user_can("administrator"))
  {
  if(!wp_verify_nonce($_POST['ir_mngr_add_violation_form_nonce'],'ir_mngr_add_violation_form_submit')){
      wp_die('Our Site is protected!!');
   }else{  
     $url=urldecode($_POST["ir_violation_url"]);
 $url=sanitize_text_field($url);
if(isset($url)):
$url=$url;
if($url=="")
{ echo "<script>ir_alert_('Enter URL');</script>"; }
else{
$block_url2=str_replace("https://", "", $url);
$block_url2=str_replace("http://", "", $block_url2);
$block_url2=str_replace("www.", "", $block_url2);
$block_url2=str_replace(" ", "", $block_url2);
$ir_url2=substr($block_url2, -1);
if($ir_url2=="/"){}else{$block_url2=$block_url2."/";}
$yes="yes";
$yes2="yes";$yess="yes";
// $meta = get_post_meta( 1000 );
$meta = get_post_meta( 1 );
if(!empty($meta["irmngr_violation"])){
foreach ($meta["irmngr_violation"] as $key => $value) {
  if($value==sanitize_text_field($block_url2) || $value==sanitize_text_field($url)){
    $yess="no";break;
  }
}
}
if(!empty($meta["irmngr_violation_user"])){
  foreach (@$meta["irmngr_violation_user"] as $key => $value) {
    if($value==sanitize_text_field($block_url2) || $value==sanitize_text_field($url)){
      $yess="no";break;
    }
  }
}
if (preg_match("/" . str_replace("www.", "", $_SERVER['HTTP_HOST']) . "/", $block_url2)){
if($irmngrstatus==true){
     if($yess=="yes"){
    global $wpdb;
        $table = $wpdb->prefix.'postmeta';
        $data = array('post_id' =>1,'meta_key' => "irmngr_violation_user" , 'meta_value' => sanitize_text_field($block_url2));
        // $data = array('post_id' =>1,'meta_key' => 'irmngr_violation', 'meta_value' => sanitize_text_field($file_read_result[1]));
        $format = array('%s','%s');
        $wpdb->insert($table,$data,$format);
        echo "<script>ir_alert_('Added');</script>";    
    }else{
    echo "<script>ir_alert_('Already Added');</script>";  
    } 
}else{
  if(count($meta["irmngr_violation_user"])>9){
  echo "<script>ir_alert_('You Have Reached Free Usage Limit Please Contact sales@increaserev.com');</script>";  
  }else{
    if($yess=="yes"){
    global $wpdb;
        $table = $wpdb->prefix.'postmeta';
        $data = array('post_id' =>1,'meta_key' => "irmngr_violation_user" , 'meta_value' => sanitize_text_field($block_url2));
        // $data = array('post_id' =>1,'meta_key' => 'irmngr_violation', 'meta_value' => sanitize_text_field($file_read_result[1]));
        $format = array('%s','%s');
        $wpdb->insert($table,$data,$format);
        echo "<script>ir_alert_('Added');</script>";    
    }else{
    echo "<script>ir_alert_('Already Added');</script>";  
    }
  }
}
        include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
        $ir_mngr=new Ir_mngr_Plugin_();
        $ir_mngr->ir_mngr_ir_init(str_replace("www.", "", $_SERVER['HTTP_HOST']).$_SERVER["REQUEST_URI"],false);
        $irmngr_dir = ABSPATH . 'wp-content/cache';
        $ir_mngr->ir_mngr_emptyDir($irmngr_dir); 
}else{
  echo "<script>ir_alert_('Not Added');</script>";  
}        
  }
endif;
    }
  }
}
if(isset($_POST["ir_remove_violation_btn"]))
{ 
  if(current_user_can("administrator"))
  {
  if(!wp_verify_nonce($_POST['ir_mngr_remove_viol_form_nonce'],'ir_mngr_remove_viol_form_submit')){
      wp_die('Our Site is protected!!');
   }else{
    $single_urls=sanitize_text_field($_POST["ir_remove_violation_t"]);
   // delete_post_meta_by_key($single_urls);
    delete_post_meta(1, 'irmngr_violation_user', $single_urls);
    echo "<script>ir_alert_('Removed');</script>";
    include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
        $ir_mngr=new Ir_mngr_Plugin_();
        $ir_mngr->ir_mngr_ir_init(str_replace("www.", "", $_SERVER['HTTP_HOST']).$_SERVER["REQUEST_URI"],false);
        $irmngr_dir = ABSPATH . 'wp-content/cache';
        $ir_mngr->ir_mngr_emptyDir($irmngr_dir); 
   }
 }
}  
 ?> 