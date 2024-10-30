<?php
if ( ! defined( 'ABSPATH' ) ) exit;
$meta = get_post_meta( 1 );
$deny_site_content="";
if(!empty($meta["irmngr_demand_src_user"])){
  foreach (@$meta["irmngr_demand_src_user"] as $key => $value) {
             $deny_site_content.="<tr><form method='POST'>";
                       @$domain_='"'.$value.'"';
                        @$domain_2='"_'.$value.'_"';
                    $deny_site_content.= wp_nonce_field( 'ir_mngr_remove_deny_form_submit', 'ir_mngr_remove_deny_form_nonce' );
                        $deny_site_content.="<td> <input type='hidden' id=".$domain_2." name='ir_txt_websites' value=".$domain_.">".$value." <span id='hardcoded-badge'></span> <input type='submit' name='btn_remove_deny_site' value='X' class='btn_remove_website' style='opacity:;'> </td></form></tr>";
  }
}
  ?>