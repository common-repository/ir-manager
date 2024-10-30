<?php 
if ( ! defined( 'ABSPATH' ) ) exit;
include_once  dirname(__FILE__) .'/ir-ads-block-func.php';
 $ir_mngr = new Ir_mngr_Plugin_(); 
 $irmngrstatus= $ir_mngr->ir_mngr_admin_status();
 if($irmngrstatus==true)
 {
 }
 else{
    ?>
        <div class="notice notice-success">
            <div class="panel-container">
                <form method="POST">
                    <?php settings_fields( 'irmngr_form_activate' ); ?>
                    <?php do_settings_sections( 'irmngr_form_activate' ); ?>
                    <?php wp_nonce_field( 'ir_mngr_activate_form_submit', 'ir_mngr_activate_form_nonce' );?>
                    <table class="form-table">
                        <tr valign="top">
                            <th scope="row">Enter Registration Key</th>
                            <td>
                                <input type="hidden" id="txt_domain" name="txt_domain" value="<?php echo $_SERVER['HTTP_HOST']; ?>">
                                <input type="text" id="txt_activate_key" name="txt_activate_key" placeholder="Enter Registration Key" style="min-width: 400px;"> 
                                <input type="submit" id="ir_activate_btn" name="ir_activate_btn" value="Activate" class="btn_ button1">
                            </td>
                            <td>
                            </td>
                        </tr>
                    </table>
                    </form>
                    <div class="clearfix"></div>           
            </div>   
        </div>
    <?php
 }
 ?>

 <script>
</script>