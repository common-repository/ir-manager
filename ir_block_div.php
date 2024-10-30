        <?php
        if ( ! defined( 'ABSPATH' ) ) exit; 
        $all_meta_for_user = get_user_meta( 1 );
        $get_status_ad_div=$all_meta_for_user["irmngr_ad_div_status"][0];
    ?>
    <div class="notice notice-success" >
        <div class="panel-container" style="padding: 15px;">
            <form method="POST">
                <?php settings_fields( 'irmngr_ad_div' ); ?>
                <?php do_settings_sections( 'irmngr_ad_div' ); ?>
                <?php wp_nonce_field( 'irmngr_ad_div_form_submit', 'irmngr_ad_div_form_nonce' );?>
                <table class="form-table" id="some-element6">
                    <tr valign="top">
                        <th scope="row">Ads Div
                            <div class="tooltip"> <span class="question_mark"> ? </span>
                                <span class="tooltiptext">
                                Turn on AMP will automatically stop executing ads for AMP url's ending with http://www.yourdomain.com/article/amp. (Default: Off)
                                </span>
                              </div>
                        </th>
                        <td>
                            <span style="padding: 15px;">
                                <input type="radio" name="ir_ad_div" id="ir_collapse_ad_div" value="collapse_ad_div" <?php if($get_status_ad_div=="collapse_ad_div"): echo'checked'; endif; ?>>
                                <label for="ir_collapse_ad_div">Collapse Ad Div </label>
                            </span>
                            <span style="padding: 15px;">
                                <input type="radio" name="ir_ad_div" id="ir_latest_article_ad_div" value="latest_article_ad_div" <?php if($get_status_ad_div=="collapse_ad_div"):else: echo'checked';endif; ?>>
                                <label for="ir_latest_article_ad_div"> Latest Article On Ad Div</label>
                            </span>
                            <span style="padding: 15px; display: none;" id="ir_show_category">
                                <label> Category</label>
                                <?php $categories = get_categories( array(
                                    'orderby' => 'name',
                                    'parent'  => 0
                                ) );
                                ?>
                                <select name="irmngr_category" id="">
                                    <option value="all" <?php if($get_status_ad_div=="all"): echo'selected'; endif; ?>>All</option>
                                <?php 
                                foreach ( $categories as $category ) {
                                    $checked="";
                                    if($category->term_id==$get_status_ad_div){
                                        $checked="selected";
                                    }
                                    ?>
                                    <option value="<?php echo $category->term_id; ?>" <?php echo $checked; ?>><?php echo $category->name; ?></option>
                                    <?php
                                    // printf( '<a href="%1$s">%2$s</a><br />',
                                    //     esc_url( get_category_link( $category->term_id ) ),
                                    //     esc_html( $category->name )
                                    // );
                                } ?>
                                </select>
                            </span>    
                                <input type="submit" id="ir_update_ad_div" name="ir_update_ad_div" style="float: right;" value="Save" class="btn_ button1">
                        </td>
                    </tr>
                </table>
            </form>
            <div class="clearfix"></div>           
        </div>   
    </div>
    <script>
        jQuery(document).ready(function($) {
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