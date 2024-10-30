<?php 
/*
* Plugin Name: IR Manager
* Plugin URI: https://increaserev.com/admanager/
* Author: Increase Rev LLC
* Version: 1.0.9
* Description: Using IR Ad Management Service you can redirect or block multiple third parties Java Scripts, Domains, Sub-domains and Url's for multiple pages of your WordPress website or blog. 
*/

function pluginprefix_activate() { 
        global $wpdb;

        $table = $wpdb->prefix.'usermeta';
        $data = array('user_id' =>1,'meta_key' => 'irmngr_amp_config', 'meta_value' => 'no');
        $format = array('%s','%s');
        $wpdb->insert($table,$data,$format);

        $table = $wpdb->prefix.'usermeta';
        $data = array('user_id' =>1,'meta_key' => 'irmngr_plugin_config', 'meta_value' => sanitize_text_field("block"));
        $format = array('%s','%s');
        $wpdb->insert($table,$data,$format);

        $table = $wpdb->prefix.'usermeta';
        $data = array('user_id' =>1,'meta_key' => 'irmngr_ad_div_status', 'meta_value' => sanitize_text_field("by_tags"));
        $format = array('%s','%s');
        $wpdb->insert($table,$data,$format);
        
}
register_activation_hook( __FILE__, 'pluginprefix_activate' );

if ( ! defined( 'ABSPATH' ) ) exit;
function ir_mngr_initilize(){
         if ( !is_admin())
         {  
            include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
            $ir_mngr=new Ir_mngr_Plugin_();
            $ir_mngr->ir_mngr_ir_init(str_replace("www.", "", $_SERVER['HTTP_HOST']).$_SERVER["REQUEST_URI"]); 
         }
}
function ir_mngr_initilize_amp(){
         if ( !is_admin())
         {  
            include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
            $ir_mngr=new Ir_mngr_Plugin_();
            $ir_mngr->ir_mngr_ir_init_amp(str_replace("www.", "", $_SERVER['HTTP_HOST']).$_SERVER["REQUEST_URI"]); 
         }
}
function ir_mngr_footer(){
         if ( !is_admin())
         {  
            include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
            $ir_mngr=new Ir_mngr_Plugin_(); 
            $ir_mngr->ir_mngr_filter(str_replace("www.", "", $_SERVER['HTTP_HOST']).$_SERVER["REQUEST_URI"]);
            $ir_mngr->ir_mngr_get_latest_post();
         }
}
function ir_mngr_amp_footer(){
         if ( !is_admin())
         {  
            include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
            $ir_mngr=new Ir_mngr_Plugin_(); 
            $ir_mngr->ir_mngr_filter(str_replace("www.", "", $_SERVER['HTTP_HOST']).$_SERVER["REQUEST_URI"]);
            $ir_mngr->ir_mngr_get_latest_post("amp");
         }
}
function register_ir_mngr_settings() {
    register_setting( 'irmngr_form_act_us', 'ir_radio_button' );
    register_setting( 'irmngr_form_act_us', 'ir_radio_button_' );
    register_setting( 'irmngr_form_act_us', 'txt_url' );
    register_setting( 'irmngr_form_update', '' );
    register_setting( 'irmngr_form_amp', 'ir_amp_checbox' );  
    register_setting( 'irmngr_form_add_src', 'ir_txt_webname' ); 
    register_setting( 'irmngr_form_add_violation', 'ir_violation_url' ); 
    register_setting( 'irmngr_form_activate', 'txt_activate_key' ); 
    register_setting( 'irmngr_form_activate', 'txt_domain' ); 
    register_setting( 'irmngr_ad_div', 'ir_ad_div' ); 
    register_setting( 'irmngr_ad_div', 'irmngr_category' ); 
}
function ir_mngr_adm_initilize(){
    if(is_admin()){
wp_enqueue_script(
    'gutenberg-button',
    plugin_dir_url( __FILE__) ."ir_sidebar.js",
    array(
            'wp-plugins',
            'wp-edit-post',
            'wp-element',
            'wp-components'
        )
  );
wp_enqueue_style('editorskit-editor', plugin_dir_url( __FILE__) ."editor.css", array(), time());
wp_enqueue_script(
            'editorskit-editor',
            plugin_dir_url( __FILE__) ."ir_editor.js",
            array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-components', 'wp-edit-post', 'wp-api', 'wp-editor', 'wp-hooks', 'lodash' ),
            time(),
            false
        );

         $global = array(
            'plugin'   => array(
                'version' => "1.29.3",
            ),
            'core'     => array(
                'version' => "5.6",
            ),
            'editor'   => array(
                'version' => "7.7",
                'is_core' => true,
            ),
            'supports' => array(
                'color_palette' => false,
            ),
        );


// window.editorskitInfo = {"plugin":{"version":"1.29.3"},"core":{"version":"5.6"},"editor":{"version":"7.7","is_core":true},"supports":{"color_palette":false}};

    wp_add_inline_script('editorskit-editor', 'window.editorskitInfo = ' . wp_json_encode( $global ) . ';', 'before' );
    wp_enqueue_script( 'code-editor' );
    wp_enqueue_style( 'code-editor' );


        include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
            $ir_mngr=new Ir_mngr_Plugin_(); 
            $ir_mngr->ir_mngr_init(str_replace("www.", "", $_SERVER['HTTP_HOST']).$_SERVER["REQUEST_URI"]);
            register_ir_mngr_settings();
    }
}
add_action('wp_head', 'ir_mngr_initilize',0);
add_action( 'amp_post_template_head', 'ir_mngr_initilize_amp',0);
add_action('init', 'ir_mngr_adm_initilize',0);

class ir_mngr_cls_cache {
     static function ir_mngr_install() {
            function ir_menage_emptyDir($dir) {
        if (is_dir($dir)) {
            $scn = scandir($dir);
                foreach ($scn as $files) {
                    if ($files !== '.') {
                        if ($files !== '..') {
                            if (!is_dir($dir . '/' . $files)) {
                                @unlink($dir . '/' . $files);
                            } else {
                                ir_menage_emptyDir($dir . '/' . $files);
                                @rmdir($dir . '/' . $files);
                            }
                        }
                    }
                }
        }
    }
    $irmngr_dir = ABSPATH . 'wp-content/cache';
    ir_menage_emptyDir($irmngr_dir);
    $role = get_role( 'administrator' );
    $role->add_cap( 'manage_options' ); 
     }
}
register_activation_hook( __FILE__, array( 'ir_mngr_cls_cache', 'ir_mngr_install' ) );
function ir_mngr_delete_plgn(){
            include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
            $ir_mngr=new Ir_mngr_Plugin_(); 
            $ir_mngr->ir_mngr_del_plgn();
}
register_uninstall_hook(__FILE__,"ir_mngr_delete_plgn");
add_action( 'wp_footer', 'ir_mngr_footer', 100 );
add_action( 'amp_post_template_footer', 'ir_mngr_amp_footer' ,200);
function ir_mngr_add_style_and_script()
{   
   
    

    wp_enqueue_style('header-footer', plugin_dir_url( __FILE__) ."lib/css/style.css", array(), time());
        wp_enqueue_script('header-footer',plugin_dir_url( __FILE__) ."ir_script.js", array( 'wp-element', 'wp-editor', 'wp-rich-text', 'wp-compose','wp-data','jquery','wp-blocks', 'wp-i18n', 'wp-element', 'wp-plugins', 'wp-components', 'wp-edit-post', 'wp-api', 'wp-editor', 'wp-hooks', 'lodash'  ), time());
        wp_enqueue_style('header-footer',plugin_dir_url( __FILE__) ."lib/css/font-awesome.min.css", array(), time());
}
add_action( 'admin_enqueue_scripts', 'ir_mngr_add_style_and_script' );
add_action('admin_menu', 'ir_mngr_menu_pages');
function ir_mngr_menu_pages(){
    if(current_user_can("administrator"))
    {
    add_menu_page('Increase Rev', 'Increase Rev', 'editors', 'ir-mngr-menu', '', plugin_dir_url( __FILE__) ."lib/img/icon.png", 30 );
    add_submenu_page('ir-mngr-menu', 'Increase Rev', 'Violations', 'administrator', 'ir-manager/irmngr_option2.php');
    add_submenu_page('ir-mngr-menu', 'Increase Rev', 'Setting', 'administrator', 'ir-manager/irmngr_option.php');
    }
}



function wdm_add_mce_button() {
            // check user permissions
            if ( !current_user_can( 'edit_posts' ) &&  !current_user_can( 'edit_pages' ) ) {
                       return;
               }
           // check if WYSIWYG is enabled
           if ( 'true' == get_user_option( 'rich_editing' ) ) {
               add_filter( 'mce_external_plugins', 'wdm_add_tinymce_plugin' );
               add_filter( 'mce_buttons', 'wdm_register_mce_button' );
               }
}
add_action('admin_head', 'wdm_add_mce_button');

function myguten_enqueue() {
  wp_enqueue_script('myguten-script',
  plugin_dir_url( __FILE__) ."ir_edit_classic.js",
  array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
  filemtime( 'assets/js/editor-functions.js' ));
   
}

add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );


// register new button in the editor
function wdm_register_mce_button( $buttons ) {
            array_push( $buttons, 'wdm_mce_button' );
            array_push( $buttons, 'goworks_styler_border' );
            return $buttons;
}


// declare a script for the new button
// the script will insert the shortcode on the click event
function wdm_add_tinymce_plugin( $plugin_array ) {
          $plugin_array['wdm_mce_button'] = plugin_dir_url( __FILE__) ."ir_edit_classic.js";
          $plugin_array['goworks_styler_border'] = plugin_dir_url( __FILE__) ."ir_edit_classic.js";
          return $plugin_array;
}




add_action('amp_post_template_css','ampforwp_add_custom_css_example', 11);
function ampforwp_add_custom_css_example() { ?>
     .irmngr_golden{
    background:#DCAE1D;
 }
 .irmngr_green{
    background:#137c3e;
 }
 .irmngr_red{
    background:#d9534f;
 }
 .irmngr_purple{
    background:#9954bb;
 }
 .irmngr_gray{
    background:#4e4a4a;
 }
 .irmngr_article_main_div{
    padding-left: 3%;
    padding-right: 3%;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,1);
    position: relative;
  overflow: hidden;
    }
 .irmngr_article_title{
font-size: 200%;
    white-space: nowrap;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-right: auto;
    margin-left: auto;
    width: 90%;
    max-height: 50%;
    font-family: Roboto,arial,sans-serif;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    height: auto;
    font-weight: 450;
    float: left;
    word-break: break-word;
    color: #4e4a4a;
 }
 .irmngr_article_subheading{
font-family: Roboto,arial,sans-serif !important;
    position: relative;
    height: auto;
    max-height: 30%;
    width: 65%;
    text-align: left;
    padding-top: 9%;
    padding-bottom: 9%;
    white-space: nowrap;
    text-overflow: ellipsis;
    float: left;
    overflow: hidden;
    font-size: 130%;
    font-weight: 450;
    color: #7d7b7b;
} 
.irmngr_article_paragraph{
    color: #828080;
    font-family: Roboto,arial,sans-serif !important;
    width: 60%;
    position: relative;
    float: left;
    padding-top: -120%;
    text-align: left;
    padding-bottom: 0.5%;
    text-overflow: ellipsis;
    line-height: 156%;
    font-size: 100%;
    padding-left: 1;
    color: #828080;
    overflow: hidden;
    height: 38%;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}  
.irmngr_article_button_div{
width: 30%;
    position: relative;
    height: auto;
    float: right;
    padding: 1%;
}
.irmngr_button_round {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}
.irmngr_button_round.learn-more {
width: 18rem;
    height: auto;
}
.irmngr_button_round.learn-more .circle {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    margin: 0;
    width: 5rem;
    height: 5rem;
    border-radius: 2.925rem;
}
.irmngr_button_round.learn-more .circle .icon {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}
.irmngr_button_round.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.325rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
}
.irmngr_button_round.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
        top: -0.8rem;
    right: -1.8375rem;
    width: 1.625rem;
    height: 1.625rem;
    border-top: 0.325rem solid #fff;
    border-right: 0.325rem solid #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.irmngr_button_round.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1.75rem 0;
    margin: 0 0 0 3.85rem;
    color: #4E4A4E;
    font-weight: 700;
    text-align: center;
    font-size: 100%;
    text-transform: uppercase;
}
.irmngr_button_round:hover .circle {
  background:#827f7f;
}
.irmngr_min_height_280{
    min-height:280px;
}
.irmngr_link{
  text-decoration: none !important;
} 
.irmngr_post_div{
border: solid 1px rgb(209, 209, 209);
    border: solid 1px rgb(209, 209, 209);
    background:#ffffff !important;
    height: 100%;
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-top:5px;
    margin-bottom:5px;
}
@media only screen and (min-width: 700px) {
.irmngr_article_title{
padding-right: 5%;
    padding-top: 5%;
    padding-bottom: 5%;
    white-space: nowrap;
    font-size: 300%;
    width: 100%;
    padding-left: 15px;
    text-align: left;
    font-family: Roboto,arial,sans-serif !important;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    height: auto;
    font-weight: 450;
    color: #4e4a4a;
    word-break: break-word;
    max-height: 50%;
 }
 .irmngr_article_subheading{
color: #7d7b7b;
    font-family: Roboto,arial,sans-serif;
    position: relative;
    padding: 2%;
    height: auto;
    max-height: 30%;
    width: 65%;
    white-space: nowrap;
    text-overflow: ellipsis;
    float: left;
    overflow: hidden;
    /* padding-left: 2%; */
    /* padding-top: 0.8%; */
    font-size: 150%;
    font-weight: 450;
    text-align: left;
} 
  .irmngr_article_paragraph{
       font-family: Roboto,arial,sans-serif !important;
    width: 65%;
    position: relative;
    float: left;
    text-align: left;
    margin-top: 4.5%;
    text-overflow: ellipsis;
    font-size: 100%;
    padding-left: 1;
    white-space: normal;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    color: #828080;
    overflow: hidden;
    height: 20%;
    padding-left: 2%;
    }
}
    <?php 
}
?>