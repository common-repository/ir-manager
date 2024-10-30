        <?php
        if ( ! defined( 'ABSPATH' ) ) exit; 
        $upload_dir = wp_upload_dir();
$ir_dir = $upload_dir['basedir'] . '/irmngr';
include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
 $ir_mngr = new Ir_mngr_Plugin_(); 
 $var= $ir_mngr->ir_mngr_admin_status();
 if($var==true)
 {
    ?>
            <div class="notice notice-success" >
            <div class="panel-container" style="padding: 15px;">
                <form method="POST">
                    <?php settings_fields( 'irmngr_form_amp' ); ?>
                    <?php do_settings_sections( 'irmngr_form_amp' ); ?>
                    <?php wp_nonce_field( 'ir_mngr_amp_form_submit', 'ir_mngr_amp_form_nonce' );?>
                <table class="form-table" id="some-element6">
                    <tr valign="top">
                        <th scope="row">Amp
                            <div class="tooltip"> <span class="question_mark"> ? </span>
                                <span class="tooltiptext">
                                Apply above settings on AMP pages ending with /amp e.g. yourdomain.com/article/amp. (Default: Off)
                                </span>
                              </div>
                        </th>
                        <td>
                            <label class="switch">
                              <input type="checkbox" name="ir_amp_checbox"  <?php if($amp_config=="yes"): echo "checked"; endif; ?> id="ir_amp_checbox">
                              <span class="slider round"></span>
                            </label>
                        </td>
                        <td>
                            <input type="submit" id="btn_update_reports_btns" name="btn_update_amp_btns" value="Save" class="btn_ button1" style="">
                        </td>
                    </tr>
                </table>
                </form>
                <div class="clearfix"></div>           
            </div>   
        </div>
    <?php
 }
 else{
    ?>
        <div class="notice notice-success" >
            <div class="panel-container" style="padding: 15px;">
                <table class="form-table" id="some-element6">
                    <tr valign="top">
                        <th scope="row">Amp
                            <div class="tooltip"> <span class="question_mark"> ? </span>
                                <span class="tooltiptext">
                                Apply above settings on AMP pages ending with /amp e.g. yourdomain.com/article/amp. (Default: Off)
                                </span>
                              </div>
                        </th>
                        <td>
                            <label class="switch" id="ir_amp_error_btn">
                              <input type="checkbox"   disabled id="ir_amp_checbox2">
                              <span class="slider round"></span>
                            </label>
                            <span id="ir_amp_error" style="color:red; font-weight: 700; padding-left: 10px; display:none ;"> For Premium User!</span>
                        </td>
                        <td>
                        </td>
                    </tr>
                </table>
                <div class="clearfix"></div>           
            </div>   
        </div>
    <?php
 }
 ?>
 <script>
 jQuery(document).ready(function($) { 
    $("#ir_amp_error").hide();
    $("#ir_amp_error_btn").click(function() {            
        $("#ir_amp_error").fadeIn();
        $("#ir_amp_error").fadeOut(8000);
    });
});      
 </script>