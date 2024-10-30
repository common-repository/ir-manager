<?php
if ( ! defined( 'ABSPATH' ) ) exit;
 ?>
 <div class="sticky" id="ir_alert"> </div>
<!--  <span class="alert alert-success sticky" style="margin-left: 20%; text-align: center; display: ; position: -webkit-sticky;
  position: sticky;top: 0;" role="alert" >asdasd</span> -->
 <div id="wait" style="display:none ;top: 45%; position: absolute;" class="loader"></div>
<div class="wrap" id="ir_blur">
    <h2 style="float: ;">IR Ad Manager </h2>
<?php 
include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
 $ir_mngr = new Ir_mngr_Plugin_(); 
$irmngrstatus= $ir_mngr->ir_mngr_admin_status();  
include_once  dirname(__FILE__) .'/irmngr_option_fun.php';
$upload_dir = wp_upload_dir();
$ir_dir = $upload_dir['basedir'] . '/irmngr';
    $all_meta_for_user = get_user_meta( 1 );

  
    $get_status=$all_meta_for_user["irmngr_plugin_config"][0];
    if(empty($get_status)){
        $get_status="block";
    }
    $get_status_ad_div=$all_meta_for_user["irmngr_ad_div_status"][0];
    $path="";
    $amp_config="no";
             $all_meta_for_user = get_user_meta( 1 );
             if($all_meta_for_user["irmngr_amp_config"][0]!=""){
                $amp_config= $all_meta_for_user["irmngr_amp_config"][0];
                }
                else{
                      global $wpdb;
                $table = $wpdb->prefix.'usermeta';
                $data = array('user_id' =>1,'meta_key' => 'irmngr_amp_config', 'meta_value' => 'no');
                $format = array('%s','%s');
                $wpdb->insert($table,$data,$format);
                }
    $ir_act_as="";
    $ir_update_violations="";
    $ir_amp="";
    $ir_add_script_src="";
    $ir_domains_allowed="";
    $ir_domains_denied="";
include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
 $ir_mngr = new Ir_mngr_Plugin_(); 
 $irmngrstatus= $ir_mngr->ir_mngr_admin_status();

  ?>    
        <?php  include_once  dirname(__FILE__) .'/ir_activate.php'; ?>
        <div class="notice notice-success">
            <div class="panel-container" style="padding: 15px;">

                <form method="POST">
                    <?php settings_fields( 'irmngr_form_act_us' ); ?>
                    <?php do_settings_sections( 'irmngr_form_act_us' ); ?>
                    <?php wp_nonce_field( 'ir_mngr_act_us_form_submit', 'ir_mngr_act_us_form_nonce' );?>
                    <table class="form-table" id="some-element">
                        <tr valign="top">
                            <th scope="row">Act as
                                <div class="tooltip"> <span class="question_mark"> ? </span>
                                <span class="tooltiptext">
                                 Select to 'redirect' or 'block ads'. (Default: Ad block)
                                </span>
                              </div>
                          </th>
                            <td>
                                <span style="padding-right: 30px;">

                                <input type="radio" name="ir_radio_button" id="ir_first_" value="redirect" <?php if($get_status=="block"):else: echo'checked'; endif; ?>>
                                <label for="ir_first_">  Redirect  
                                    <div style="margin-left: -0.8%;margin-top: 2px;" class="tooltip"> <span class="question_mark"  style="font-weight: 700;"> ? </span>
                                     <span class="tooltiptext">
                                      Redirect to 'homepage' or any specific 'URL'. (Default: Homepage)
                                     </span>
                                  </div> 
                              </label>
                                    
                            </span>
                            <span style="padding-right: 15px;">
                                <input type="radio" name="ir_radio_button" id="ir_second_" value="block" <?php if($get_status=="block"): echo'checked';endif; ?>>
                                <label for="ir_second_"> Ad Block
                                    <div style="margin-left: -0.5%;margin-top: 2px;" class="tooltip"> <span class="question_mark" style="font-weight: 700;"> ? </span>
                                        <span class="tooltiptext">
                                         Select to 'collapse ad' div or show your website 'article' in ad space. (Default: Show Article)
                                        </span>
                                      </div>
                                </label>

                                 
                            </span>
                                <input type="submit" id="ir_update_file_btn" name="ir_update_act_us_btn" style="float: right;" value="Save" class="btn_ button1">
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr id="show_div" style="display: none;">
                             <th scope="row"></th>
                            <td>
                                <input type="radio" name="ir_radio_button_" id="ir_first_1" value="homepage" checked="" <?php if($get_status=="homepage"): echo'checked';endif; ?>>
                                <label for="ir_first_1"> To  Homepage </label>
                                  <span style="padding-left: 5%; padding-right: 5%; font-weight: 600;">OR</span>
                                <input type="radio" name="ir_radio_button_" id="ir_second_2" value="custom" <?php if($get_status=="homepage"): elseif($get_status=="block"): else: echo'checked';endif; ?>>
                                <label for="ir_second_2"> To Url</label>
                                <input type="text" id="txt_url" name="txt_url" placeholder="Type or Paste url where violated pages or articles will be redirected" value="<?php if($get_status=="homepage"): elseif($get_status=="block"): else: echo $get_status; endif; ?>" style="min-width: 50%;">
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr id="ir_show_addiv" style="display: none;">
                             <th scope="row"></th>
                            <td>
                                <span style="padding-right: 15px;">
                                    <input type="radio" name="ir_ad_div" id="ir_collapse_ad_div" value="collapse_ad_div" <?php if($get_status_ad_div=="collapse_ad_div"): echo'checked'; endif; ?>>
                                    <label for="ir_collapse_ad_div">Collapse Ad</label>
                                </span>
                                <span style="padding-right: 5px;">
                                    <input type="radio" name="ir_ad_div" id="ir_latest_article_ad_div" value="latest_article_ad_div" <?php if($get_status_ad_div=="collapse_ad_div"):else: echo'checked';endif; ?>>
                                    <label for="ir_latest_article_ad_div"> Show Article By</label>
                                </span>
                                <span style="padding-right: 15px; display: none;" id="ir_show_category">
                                <select style="margin: 0px !important;" name="irmngr_category" id="">
                                    <option value="by_tags" <?php if($get_status_ad_div=="by_tags"): echo'selected'; endif; ?>>Tags</option>
                                    <option value="by_category" <?php if($get_status_ad_div=="by_category"): echo'selected'; endif; ?>>Category</option>
                                    <option value="by_latest" <?php if($get_status_ad_div=="by_latest"): echo'selected'; endif; ?>>Latest</option>
                                </select>
                            </span>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </table>
                    </form>
                    <div class="clearfix"></div>
            </div>
        </div>
        <div class="notice notice-success" >
            <div class="panel-container" style="padding: 15px;">
                <form method="POST">
                    <?php settings_fields( 'irmngr_form_update' ); ?>
                    <?php do_settings_sections( 'irmngr_form_update' ); ?>
                    <?php wp_nonce_field( 'ir_mngr_update_viol_form_submit', 'ir_mngr_update_viol_form_nonce' );?>
                <table class="form-table" id="some-element1">
                    <tr valign="top">
                        <th scope="row">Update Violations
                            <div class="tooltip"> <span class="question_mark"> ? </span>
                                <span class="tooltiptext">
                                'Update' violation URLs from IR database and purge your site's cache. 
                                 (It will purge cache automatically for WP Fatest Cache, W3 Total Cache and WP Super Cache. If you are using any other plugin kindly manually purge cache).
                                </span>
                              </div>
                          </th>
                        <td>
                          <input type="submit" id="btn_update_reports_btns" name="btn_update_reports_btns" value="Update" class="btn_ button1" style="">
                        </td>
                        <td>
                        </td>
                    </tr>
                </table>
                </form>
                <div class="clearfix"></div>
            </div>
        </div>
<?php  include_once  dirname(__FILE__) .'/ir_amp.php'; ?>
<?php  //include_once  dirname(__FILE__) .'/ir_block_div.php'; ?>
        <div class="notice notice-success" >
            <div class="panel-container" style="padding: 15px;">
                <form method="POST">
                    <?php settings_fields( 'irmngr_form_add_src' ); ?>
                    <?php do_settings_sections( 'irmngr_form_add_src' ); ?>
                     <?php wp_nonce_field( 'ir_mngr_add_src_form_submit', 'ir_mngr_add_src_form_nonce' );?>
                    <table class="form-table" id="some-element2">
                        <tr valign="top">
                            <th scope="row">Block Source
                                <div class="tooltip"> <span class="question_mark"> ? </span>
                                <span class="tooltiptext">
                                 Add desire DOMAIN.COM / SUB.DOMAIN.COM / *.DOMAIN.COM / URL to be prohibited on violation pages. 
                                 (Google Ads are blocked by default for registered plugin)
                                </span>
                              </div>
                            </th>
                            <td>
                                <input type="text" placeholder="Add source domain/URL which you want to block on violation pages" name="ir_txt_webname" id="ir_txt_webname" style="min-width: 70%;">
                                <input type="submit" id="add_deny_site_btn" name="add_deny_site_btn" value="Add" class="btn_ button2">
                            </td>
                            <td></td>
                        </tr>
                    </table>
                    </form>
                    <table class="form-table" id="some-element5">
                   
                                <?php
$meta = get_post_meta( 1 );
$deny_site_content="";
if(!empty($meta["irmngr_demand_src_user"])){
    ?>
     <tr valign="top">
                        <tr scope="row">Domains Denied
                            <!-- <div class="tooltip"> <span class="question_mark"> ? </span>
                                <span class="tooltiptext">
                                Domains blocked for advertising.
                                </span>
                              </div> -->
                        </tr>
                    </tr>
                    <tr>
                        <td style="width: 100%;">
                            <table id="ir_deny_data_show" class="table_ir">
    <?php
  foreach (@$meta["irmngr_demand_src_user"] as $key => $value) {
             $deny_site_content.="<tr><form method='POST'>";
                       @$domain_='"'.$value.'"';
                        @$domain_2='"_'.$value.'_"';
                    $deny_site_content.= wp_nonce_field( 'ir_mngr_remove_deny_form_submit', 'ir_mngr_remove_deny_form_nonce' );
                        $deny_site_content.="<td> <input type='hidden' id=".$domain_2." name='ir_txt_websites' value=".$domain_.">".$value." <span id='hardcoded-badge'></span> <input type='submit' name='btn_remove_deny_site' value='X' class='btn_remove_website' style='opacity:;'> </td></form></tr>";
  }
?>
                                <?php echo @$deny_site_content; ?>

                            </table>
                        </td>
                    </tr>
<?php }  ?>                    
                    </table>
                    <div class="clearfix"></div>
            </div>
        </div>
        <?php  include_once  dirname(__FILE__) .'/ir_footer.php'; ?>
</div>
<script>
jQuery(document).ready(function($) {
    irmngrcheck();
function irmngrcheck()
{
var demovalue=$("input:radio[name=ir_radio_button]:checked").val();
if(demovalue=="redirect")
        {
            $("#show_div").fadeIn();$("#ir_show_addiv").fadeOut();
        }
        else{ $("#show_div").fadeOut();$("#ir_show_addiv").fadeIn(); }
}
    $('input:radio[name=ir_radio_button]').click(function(){
        var demovalue =$(this).val();
        if(demovalue=="redirect")
        {
            $("#show_div").fadeIn();$("#ir_show_addiv").fadeOut();
        }
        else{ $("#show_div").fadeOut();$("#ir_show_addiv").fadeIn(); }
    });


irmngr_ad_div();
function irmngr_ad_div()
{
var iraddiv=$("input:radio[name=ir_ad_div]:checked").val();
if(iraddiv=="latest_article_ad_div")
        {
            $("#ir_show_category").fadeIn();
        }
        else{ $("#ir_show_category").fadeOut(); }
}
            $('input:radio[name=ir_ad_div]').click(function(){
                var iraddiv =$(this).val();
                if(iraddiv=="latest_article_ad_div")
                {
                    $("#ir_show_category").fadeIn();
                }
                else{ $("#ir_show_category").fadeOut(); }
             });    
});
</script>