<?php 
if ( ! defined( 'ABSPATH' ) ) exit; 
include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
 $ir_mngr = new Ir_mngr_Plugin_(); 
 $irmngrstatus= $ir_mngr->ir_mngr_admin_status();
?>
 <div class="sticky" id="ir_alert"> </div>
 <div id="wait" style="display:none ;top: 45%; position: absolute;" class="loader"></div>
<div class="wrap" style="min-height: 100%;">
     <h2>IR Ad Manager</h2>
        <?php
include_once  dirname(__FILE__) .'/irmngr_option2_fun.php';
         include_once  dirname(__FILE__) .'/ir_activate.php'; ?>
<?php 
$upload_dir = wp_upload_dir();
$ir_dir = $upload_dir['basedir'] . '/irmngr';
include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
 $ir_mngr = new Ir_mngr_Plugin_(); 
 $irmngrstatus= $ir_mngr->ir_mngr_admin_status();
 ?>
 <?php $reload=$_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"]; ?>
        <div class="notice notice-success">
            <div class="panel-container">
              <form method="POST">
                <?php settings_fields( 'irmngr_form_add_violation' ); ?>
                    <?php do_settings_sections( 'irmngr_form_add_violation' ); ?>
                <?php wp_nonce_field( 'ir_mngr_add_violation_form_submit', 'ir_mngr_add_violation_form_nonce' );?>
                    <table class="form-table" id="some-element">
                        <tr valign="top">
                            <th scope="row">Add Violation URL 
                              <div class="tooltip"> <span class="question_mark"> ? </span>
                                <span class="tooltiptext">
                               Below URL's will be prohibited to execute Google Ads & your defined 'Block Source'.
                                </span>
                              </div>
                            </th>
                            <td>
                                <input type="text" placeholder="Example:  https://www.example.com/example/" name="ir_violation_url" id="ir_violation_url" style="min-width: 70%;"> 
                                <input type="submit" id="add_violation_url_btn" name="add_violation_url_btn" value="Add" class="btn_ button2"> 
                            </td>
                            <td></td>
                        </tr>
                    </table>
                    </form>
                    <div class="clearfix"></div>           
            </div>   
        </div>
        <input type="hidden" value="1" id="txt_pagination_number">
        <div class="notice notice-success" style="min-height: 400px;" id="some-element2">
            <div class="panel-container" style="padding: 15px;">
                 <ul id="data_show" class="ir_data_show ">
                    <?php  include_once  dirname(__FILE__) .'/ir_get.php';  echo @$ir_violation_get_content;
                    ?>
                </ul>
                <div class="clearfix"></div>           
            </div>   
        </div>
       <div id='pagination' style="display: none;"></div>
</div>
 <?php  include_once  dirname(__FILE__) .'/ir_footer.php'; ?>