<?php
error_reporting(0);
if ( ! defined( 'ABSPATH' ) ) exit;
class Ir_mngr_Plugin_ {
    private $ir_domain;
    private $ir_link;
    public $ir_dir;
    private $ir_request_uri;
    public function ir_mngr_init($url) {
        $this->ir_domain = str_replace("www.", "", $_SERVER['HTTP_HOST']);
        $this->ir_link = $this->ir_mngr_var();
        $upload_dir = wp_upload_dir();
        
        $meta = get_post_meta( 1 );
        if(empty($meta["irmngr_admin_check"])){
           global $wpdb;
            $table = $wpdb->prefix.'postmeta';
            $data = array('post_id' =>1,'meta_key' => 'irmngr_admin_check', 'meta_value' => sanitize_text_field(date("d")));
            $format = array('%s','%s');
            $wpdb->insert($table,$data,$format);
            $this->ir_dir = $upload_dir['basedir'] . '/irmngr';
            $this->ir_mngr_directory();
            $this->ir_mngr_check_date();
            $this->ir_mngr_domain_status();
            $this->ir_mngr_get_plugin_config();
            $this->ir_mngr_ad_div_status();
        }
        else if(!empty($meta["irmngr_admin_check"])){
                if($meta["irmngr_admin_check"][0]!=date("d")){
                    $this->ir_dir = $upload_dir['basedir'] . '/irmngr';
                    $this->ir_mngr_directory();
                    $this->ir_mngr_check_date();
                    $this->ir_mngr_domain_status();
                    $this->ir_mngr_get_plugin_config();
                    $this->ir_mngr_ad_div_status();
                    update_post_meta( 1, 'irmngr_admin_check', sanitize_text_field(date("d")) );
                }
        }
    }
    function ir_mngr_ir_init($url, $cache = true) {
        $this->ir_mngr_directory();
        $this->ir_domain = str_replace("www.", "", $_SERVER['HTTP_HOST']);
        $this->ir_link = $this->ir_mngr_var();
        $upload_dir = wp_upload_dir();
        $this->ir_dir = $upload_dir['basedir'] . '/irmngr';
        if ($cache == "true" || $cache == "cache") {
            $this->ir_mngr_update_cache();
        }
        // $this->ir_mngr_check_date();
        // $this->ir_mngr_get_plugin_config();
        $url1 = str_replace("/", "_", $_SERVER["REQUEST_URI"]);
        $url2 = str_replace("-", "_", $url1);
        $this->ir_request_uri = $this->ir_mngr_request_url($_SERVER["REQUEST_URI"]);
        if (isset($_GET["ir_load_content"])) {
        }
                $meta = get_post_meta( 1 );
                if(!empty($meta["irmngr_demand_src"])){
                    $this->ir_mngr_url_process2(str_replace("www.", "", $_SERVER['HTTP_HOST']) . $_SERVER["REQUEST_URI"]);
                }
                elseif(!empty($meta["irmngr_demand_src_user"])){
                    $this->ir_mngr_url_process2(str_replace("www.", "", $_SERVER['HTTP_HOST']) . $_SERVER["REQUEST_URI"]);
                }
    }
    function ir_mngr_ir_init_amp($url, $cache = true) {
        $this->ir_mngr_directory();
        $this->ir_domain = str_replace("www.", "", $_SERVER['HTTP_HOST']);
        $this->ir_link = $this->ir_mngr_var();
        $upload_dir = wp_upload_dir();
        $this->ir_dir = $upload_dir['basedir'] . '/irmngr';
        if ($cache == "true" || $cache == "cache") {
            $this->ir_mngr_update_cache();
        }
        $this->ir_mngr_check_date();
        $this->ir_mngr_get_plugin_config();
        $url1 = str_replace("/", "_", $_SERVER["REQUEST_URI"]);
        $url2 = str_replace("-", "_", $url1);
        $this->ir_request_uri = $this->ir_mngr_request_url($_SERVER["REQUEST_URI"]);
        if (isset($_GET["ir_load_content"])) {
        }
                $meta = get_post_meta( 1 );
                if(!empty($meta["irmngr_demand_src"])){
                    $this->ir_mngr_url_process_amp(str_replace("www.", "", $_SERVER['HTTP_HOST']) . $_SERVER["REQUEST_URI"]);
                }
                elseif(!empty($meta["irmngr_demand_src_user"])){
                    $this->ir_mngr_url_process_amp(str_replace("www.", "", $_SERVER['HTTP_HOST']) . $_SERVER["REQUEST_URI"]);
                }
    }
    function ir_mngr_request_url($url) {
        $ir_url = str_replace("/", "_", $url);
        $ir_url1 = explode("?", $ir_url);
        $result = $ir_url1[0];
        return $result;
    }
    function ir_mngr_check_date() {
        if ($this->ir_mngr_file_exixts($this->ir_dir . "/config.txt")):
            $get_days = $this->ir_mngr_get_file_date(date('d-m-Y'), $this->ir_dir . "/config.txt");
            $this->ir_mngr_update_config_file($get_days);
        else:
            $this->ir_mngr_get_config($this->ir_link, $this->ir_dir);
        endif;
        if ($this->ir_mngr_file_exixts($this->ir_dir . "/reports/reports.csv")):
            $get_days = $this->ir_mngr_get_file_date(date('d-m-Y'), $this->ir_dir. "/reports/reports.csv");
            $this->ir_mngr_update_file($get_days);
        else:
            $this->ir_mngr_file_create($this->ir_domain, $this->ir_link, $this->ir_dir);
        endif;
    }
    function ir_mngr_file_create($domain_name, $ir_name, $directory) {
        if ($this->ir_mngr_file_exixts($this->ir_dir. "/demand_block/demand_block.csv")):
            @unlink($this->ir_dir . "/demand_block/demand_block.csv");
        endif;
        $domain_name = $domain_name;
        @$file_content = $this->ir_mngr_execute_url($ir_name . 'plugin_/domain_info.php?ir_domain=' . $domain_name);
        @$result = explode($this->ir_domain . "=", $file_content);
        $count = "1";
        foreach (@$result as $ahsan) {
            if ($ahsan == ""):
            else:
                if ($count == "1") {
                    $ahsan = str_replace(" ", "", $ahsan);
                    $ahsan = str_replace("<br>", "", $ahsan);
                    $file = $ir_name . $ahsan;
                    $directory = $directory;
                    @$newfile = $directory . '/reports/reports.csv';
                    $response = wp_remote_get(esc_url_raw($file));
                    $file_content="";
                    if (!is_wp_error($response)) {
                        @$file_content = $response['body'];
                    }else{
                        $file_content="";
                    }
                    @file_put_contents($newfile, $file_content);
                     $file_read=fopen($newfile,"r");
                    while($file_read_result=fgetcsv($file_read)){ $yess="no";
                        if($file_read_result[1]!="Domain_url" && $file_read_result[1]!=""){
                            $meta = get_post_meta( 1 );
                            if(!empty($meta["irmngr_violation"])){
                                foreach ($meta["irmngr_violation"] as $key => $value) {
                                        if($value==$file_read_result[1]){
                                            $yess="yes";break;
                                        }
                                }
                            }
                            if($yess=="no"){
                                if(!empty($file_read_result[1])){
                                    global $wpdb;
                                    $table = $wpdb->prefix.'postmeta';
                                    $data = array('post_id' =>1,'meta_key' => 'irmngr_violation', 'meta_value' => sanitize_text_field($file_read_result[1]));
                                    $format = array('%s','%s');
                                    $wpdb->insert($table,$data,$format);
                                }
                            }
                            }
                    }
                    fclose($file_read);
                    @unlink($newfile);
                    $count = "2";
                } else {
                    $file_url = str_replace(" ", "", $ahsan);
                    $file_url = str_replace("<br>", "", $file_url);
                    $directory = $directory;
                    $domain_name = $ir_name;
                    $file = $domain_name . $file_url;
                    @$newfile = $directory . '/demand_block/demand_block.csv';
                    $response = wp_remote_get( esc_url_raw($file));
                    $file_content="";
                    if (!is_wp_error($response)) {
                        @$file_content = $response['body'];
                    }else{
                        $file_content="";
                    }
                    @file_put_contents($newfile, $file_content);
                       $file_read=fopen($newfile,"r");
                    while($file_read_result=fgetcsv($file_read)){ $yess="no";
                        if($file_read_result[0]!="Block_url"){
                            $meta = get_post_meta( 1 );
                            if(!empty($meta["irmngr_demand_src"])){
                                 foreach ($meta["irmngr_demand_src"] as $key => $value) {
                                        if($value==$file_read_result[0]){
                                            $yess="yes";break;
                                        }
                                }
                            }
                                 if($yess=="no"){
                                    global $wpdb;
                                    $table = $wpdb->prefix.'postmeta';
                                        $data = array('post_id' =>1,'meta_key' => 'irmngr_demand_src', 'meta_value' => sanitize_text_field($file_read_result[0]));
                                        $format = array('%s','%s');
                                        $wpdb->insert($table,$data,$format);
                                }
                            }
                    }
                    fclose($file_read);
                    @unlink($newfile);
                }
            endif;
        }
    }
    function ir_mngr_directory() {
        if (!file_exists($this->ir_dir . "/reports")):
            @mkdir($this->ir_dir . "/reports", 0755, true);
        endif;
        if (!file_exists($this->ir_dir . "/demand_block")):
            @mkdir($this->ir_dir. "/demand_block", 0755, true);
        endif;
        if (!file_exists($this->ir_dir . "/ir_save")):
            @mkdir($this->ir_dir . "/ir_save", 0755, true);
        endif;
    }
    function ir_mngr_get_config($ir_name, $directory) {
        $file = $ir_name . "plugin_/config.txt";
        $directory = $directory;
        $newfile = $directory . '/config.txt';
    }
    function ir_mngr_demand_block() {
        @$csv = array();
       $meta = get_post_meta( 1 );
       if(!empty($meta["irmngr_demand_src"])){
           foreach($meta["irmngr_demand_src"] as $val => $key){
               @$csv[] = $key;
            }
        }
        if(!empty($meta["irmngr_demand_src_user"])){
           foreach($meta["irmngr_demand_src_user"] as $val => $key){
               @$csv[] = $key;
            }
        }
        return $csv; 
    }
    function ir_mngr_voilation_url(){
        @$csv = array();
        $meta = get_post_meta( 1 );
        if(!empty($meta["irmngr_violation"])){
            foreach ($meta["irmngr_violation"] as $key => $value) {
                if(!empty($value)){
                     @$csv[] = $this->irmngr_clean_url($value);
                }
            }
        }
        if(!empty($meta["irmngr_violation_user"])){
            foreach (@$meta["irmngr_violation_user"] as $key => $value) {
                if(!empty($value)){
                     @$csv[] = $this->irmngr_clean_url($value);
                }
            }
        }
        return $csv; 
    }
    function ir_mngr_reports() {
        @$filename = $this->ir_dir. '/reports/reports.csv';
        $row = 0;
        $col = 0;
        $handle = @fopen($filename, "r");
        if ($handle) {
            while ((@$row = fgetcsv($handle, 4096)) !== false) {
                if (empty($fields)) {
                    $fields = $row;
                    continue;
                }
                foreach (@$row as $k => $value) {
                    $results[$col][$fields[$k]] = $value;
                }
                $col++;
                unset($row);
            }
            if (!feof($handle)) {
            }
            @fclose($handle);
        }
        return $results;
    }
    function ir_mngr_get_file_date($today_date, $file_name) {
        @$from = date_create($today_date);
        @$to = date_create(date("d-m-Y", filemtime($file_name)));
        @$diff = date_diff($to, $from);
        return $diff->format('%a');
    }
    function ir_mngr_update_file($days) {
        if (@$days >= "1"):
            @$this->ir_mngr_file_create($this->ir_domain, $this->ir_link, $this->ir_dir);
        endif;
    }
    function ir_mngr_update_config_file($days) {
        if ($days >= "1"):
            @$this->ir_mngr_get_config($this->ir_link, $this->ir_dir);
        endif;
    }
    function ir_mngr_file_exixts($file_name) {
        if (file_exists($file_name)):
            return true;
        else:
            return false;
        endif;
    }
    function ir_mngr_hide(){
        $all_meta_for_user = get_user_meta( 1 );
        $get_status_ad_div=$all_meta_for_user["irmngr_ad_div_status"][0];
    if($get_status_ad_div=="collapse_ad_div"){
         echo '    <style>
                .adsbygoogle{
                    min-width:0px !important;
                    width:0px !important;
                    height:0px !important;
                    min-height:0px !important;
                    display:none !important;
                }
            </style>';
    }else{
        echo '    <style>
                .adsbygoogle{
                    word-wrap: break-word !important;
                    overflow:hidden !important;
                     background:transparent;
                }
            </style>';
    }
    }
     function ir_mngr_url_process2($url) {
        
        $url=urldecode($url);
        $url = str_replace("https://", "", $url);
        $url = str_replace("http://", "", $url);
        $url = str_replace("www.", "", $url);
        $url2 = explode("?", $url);
        $url = $url2[0];
        if ($url != " "):
         $meta = get_post_meta( 1 );
            @$amp_config = $this->ir_mngr_get_amp_config();
                if ($amp_config == "yes") {
                   $url3 = str_replace("/", "_", $url);
                     $url = str_replace("amp/", "", $url);
                    if(!empty($meta["irmngr_violation"])){
                         foreach ($meta["irmngr_violation"] as $key => $value) {
                             if($value==$url){
                                @$this->ir_mngr_config_read("on");break;
                             }
                         }
                    }
                     if(!empty($meta["irmngr_violation_user"])){
                         foreach (@$meta["irmngr_violation_user"] as $key => $value) {
                             if($value==$url){
                                @$this->ir_mngr_config_read("on");break;
                             }
                         }
                    }
                }
                else{ 
                    if(!empty($meta["irmngr_violation"])){
                         foreach ($meta["irmngr_violation"] as $key => $value) {
                             if($value==$url){
                                @$this->ir_mngr_config_read("off");break;
                             }
                         }
                    }
                     if(!empty($meta["irmngr_violation_user"])){
                         foreach (@$meta["irmngr_violation_user"] as $key => $value) {
                             if($value==$url){
                                @$this->ir_mngr_config_read("off");break;
                             }
                         }
                    }
             }
            endif;
        }
        function ir_mngr_url_process_amp($url) {
             $url=urldecode($url);
        $url = str_replace("https://", "", $url);
        $url = str_replace("http://", "", $url);
        $url = str_replace("www.", "", $url);
        $url2 = explode("?", $url);
        $url = $url2[0];
        if ($url != " "):
         $meta = get_post_meta( 1 );
            @$amp_config = $this->ir_mngr_get_amp_config();
                if ($amp_config == "yes") {
                   $url3 = str_replace("/", "_", $url);
                     $url = str_replace("amp/", "", $url);
                    if(!empty($meta["irmngr_violation"])){
                         foreach ($meta["irmngr_violation"] as $key => $value) {
                             if($value==$url){
                                @$this->ir_mngr_config_read_amp("on");break;
                             }
                         }
                    }
                     if(!empty($meta["irmngr_violation_user"])){
                         foreach (@$meta["irmngr_violation_user"] as $key => $value) {
                             if($value==$url){
                                @$this->ir_mngr_config_read_amp("on");break;
                             }
                         }
                    }
                }
                else{ 
                    if(!empty($meta["irmngr_violation"])){
                         foreach ($meta["irmngr_violation"] as $key => $value) {
                             if($value==$url){
                                @$this->ir_mngr_config_read_amp("off");break;
                             }
                         }
                    }
                     if(!empty($meta["irmngr_violation_user"])){
                         foreach (@$meta["irmngr_violation_user"] as $key => $value) {
                             if($value==$url){
                                @$this->ir_mngr_config_read_amp("off");break;
                             }
                         }
                    }
       }
            endif;
        }
        function ir_mngr_var() {
            return "https://statsmin.increaserev.com/";
            // return "https://dev.increaserev.com/statsmin3/";
        }
        function ir_mngr_ads_block_2($status){
            $self = "'self'";
            $none = "'none'";
            $unsafe = "'unsafe-inline'";
            $unsafe2 = "'unsafe-eval'";
            $src__="ajax.googleapis.com *.gstatic.com  *.2mdn.net *.ampproject.org *.instagram.com *.twitter.com *.tumblr.com *.linkedin.com *.pinterest.com *.snapchat.com *.facebook.com *.youtube.com *.ampproject.org *.brid.tv *.increaserev.com www.increaserev.com increaserev.com https://increaserev.com/* increaserev.com *.disqus.com *.disquscdn.com";
            $yes3 = "no";
            $data = "";
            $meta = get_post_meta( 1 );
            if(!empty($meta["irmngr_save_src"])){
                foreach ($meta["irmngr_save_src"] as $key => $value) {
                    if (!function_exists('ir_mngr_get_domain')) {
                                function ir_mngr_get_domain($url = SITE_URL) {
                                    preg_match("/[a-z0-9-]{1,63}.[a-z.]{2,6}$/", parse_url($url, PHP_URL_HOST), $_domain_tld);
                                    return $_domain_tld[0];
                                }
                            }
                            $ir_domain_ir= ir_mngr_get_domain($value);
                    if (@str_replace("www.", "", $_SERVER['HTTP_HOST'])==$ir_domain_ir) {
                    } else {
                        $yes = "yes";
                        $yes2 = "yes";
                        @$get = $this->ir_mngr_demand_block();
                        if (!$get) {}
                            else{
                                 foreach (@$get as $key2 => $value2) {
                                    $yes3="yes";
                                if (preg_match("/" . $value2 . "/", $value)) {
                                    $yes = "no";
                                } 
                              }
                            }
                            if ($yes == "yes") {
                            if (!function_exists('ir_mngr_get_domain')) {
                                function ir_mngr_get_domain($url = SITE_URL) {
                                    preg_match("/[a-z0-9-]{1,63}.[a-z.]{2,6}$/", parse_url($url, PHP_URL_HOST), $_domain_tld);
                                    return $_domain_tld[0];
                                }
                            }
                            $result2 = ir_mngr_get_domain($value);
                            if (preg_match("/" . $result2 . "/", $data)) {
                            }
                                 if (preg_match("/googleapis/", $data) && $yes3=="yes" || preg_match("/googleapis/", $result2) && $yes3=="yes") {
                            }
                             else {
                                if($status=="oon"){
                                    if (preg_match("/brid/", $data) || preg_match("/brid/", $result2)) {
                                        }else{
                                           $data.= "*." . $result2 . " "; 
                                        }
                                }else{
                                $data.= "*." . $result2 . " "; }
                            }
                        }
                    }
                }
            } 
            if($status=="on")
            {
            echo '<script>function ir_function_block1(){    var meta = document.createElement("meta");
            meta.httpEquiv = "Content-Security-Policy";meta.content = "connect-src * ; child-src * ; frame-src  ' . $self . ' ' . $unsafe . ' '.$src__.' ' . $data . '  ; "; document.getElementsByTagName("head")[0].appendChild(meta);
            } </script> ';
            // echo '<script> ir_function_block1(); </script>' ;
             }
             echo '<script>function ir_function_block(){    var meta = document.createElement("meta");
            meta.httpEquiv = "Content-Security-Policy";meta.content = "connect-src * ; child-src * ; script-src  ' . $self . ' ' . $unsafe . ' ' . $unsafe2 . ' '.$src__.' ' . $data . ' ; "; document.getElementsByTagName("head")[0].appendChild(meta);} 
            </script>';
           echo '<script>ir_function_block();</script>';
        }
        function ir_mngr_ads_block_2_amp($status){
            $self = "'self'";
            $none = "'none'";
            $unsafe = "'unsafe-inline'";
            $unsafe2 = "'unsafe-eval'";
            $src__="ajax.googleapis.com *.gstatic.com  *.2mdn.net *.ampproject.org *.instagram.com *.twitter.com *.tumblr.com *.linkedin.com *.pinterest.com *.snapchat.com *.facebook.com *.youtube.com *.ampproject.org *.brid.tv *.increaserev.com www.increaserev.com increaserev.com *.disqus.com *.disquscdn.com";
            $yes3 = "no";
            $data = "";
            $meta = get_post_meta( 1 );
            if(!empty($meta["irmngr_save_src"])){
                foreach ($meta["irmngr_save_src"] as $key => $value) {
                    if (!function_exists('ir_mngr_get_domain')) {
                                function ir_mngr_get_domain($url = SITE_URL) {
                                    preg_match("/[a-z0-9-]{1,63}.[a-z.]{2,6}$/", parse_url($url, PHP_URL_HOST), $_domain_tld);
                                    return $_domain_tld[0];
                                }
                            }
                            $ir_domain_ir= ir_mngr_get_domain($value);
                    if (@str_replace("www.", "", $_SERVER['HTTP_HOST'])==$ir_domain_ir) {
                    } else {
                        $yes = "yes";
                        $yes2 = "yes";
                        @$get = $this->ir_mngr_demand_block();
                        if (!$get) {}
                            else{
                                 foreach (@$get as $key2 => $value2) {
                                    $yes3="yes";
                                if (preg_match("/" . $value2 . "/", $value)) {
                                    $yes = "no";
                                } 
                              }
                            }
                            if ($yes == "yes") {
                            if (!function_exists('ir_mngr_get_domain')) {
                                function ir_mngr_get_domain($url = SITE_URL) {
                                    preg_match("/[a-z0-9-]{1,63}.[a-z.]{2,6}$/", parse_url($url, PHP_URL_HOST), $_domain_tld);
                                    return $_domain_tld[0];
                                }
                            }
                            $result2 = ir_mngr_get_domain($value);
                            if (preg_match("/" . $result2 . "/", $data)) {
                            }
                                 if (preg_match("/googleapis/", $data) && $yes3=="yes" || preg_match("/googleapis/", $result2) && $yes3=="yes") {
                            }
                             else {
                                if($status=="oon"){
                                    if (preg_match("/brid/", $data) || preg_match("/brid/", $result2)) {
                                        }else{
                                           $data.= "*." . $result2 . " "; 
                                        }
                                }else{
                                $data.= "*." . $result2 . " "; }
                            }
                        }
                    }
                }
            } 
            if($status=="on")
            {
            echo '<script>function ir_function_block_amp1(){    var meta = document.createElement("meta");
            meta.httpEquiv = "Content-Security-Policy";meta.content = "connect-src * ; child-src * ; frame-src  ' . $self . ' ' . $unsafe . ' '.$src__.' ' . $data . '  ; "; document.getElementsByTagName("head")[0].appendChild(meta);
            } </script> ';
            echo '<script> ir_function_block_amp1(); </script>' ;
             }else{
             echo '<script>function ir_function_block_amp(){    var meta = document.createElement("meta");
            meta.httpEquiv = "Content-Security-Policy";meta.content = "connect-src * ; child-src * ; script-src  ' . $self . ' ' . $unsafe . ' ' . $unsafe2 . ' '.$src__.' ' . $data . ' ; "; document.getElementsByTagName("head")[0].appendChild(meta);} 
            </script>';
           echo '<script>ir_function_block_amp();</script>';
           }
        }
        function ir_mngr_amp_footer()
        {
             echo '<script>function ir_amp_footer1(){   
            var h = document.getElementsByTagName("amp-ad");
                for (var i = h.length; i--; ) {
                    h[i].style.display = "none";
                }
            } 
            </script>'; echo '<script>ir_amp_footer1();</script>';
        }
        function ir_mngr_home_redirect() {
            wp_safe_redirect(get_site_url());
        }
        function ir_mngr_url_redirect($url) {
            $url = str_replace("https://", "", $url);
            $url = str_replace("http://", "", $url);
            $url = str_replace("www.", "", $url);
            wp_safe_redirect("https://'".$url);
        }
        function ir_mngr_config_read($status) {
            $meta = get_post_meta( 1 );
            $irmngr_dem_src="no";
            if(!empty($meta["irmngr_demand_src"])){
                $irmngr_dem_src="yes";
            }
            if(!empty($meta["irmngr_demand_src_user"])){
                $irmngr_dem_src="yes";
            }
            if($irmngr_dem_src=="yes"){
            $all_meta_for_user = get_user_meta( 1 );
            $get_status=$all_meta_for_user["irmngr_plugin_config"][0];
            @$get_days_ = $get_status;
            if (@$get_days_ == "block"):
                wp_enqueue_style('header-footer', plugin_dir_url( __FILE__) ."lib/css/irmngr_adsstyle.css", array(), time());
                @$this->ir_mngr_hide();
                @$this->ir_mngr_ads_block_2($status);
            elseif (@$get_days_ == "homepage"):
                @$this->ir_mngr_home_redirect();
            else:
                @$this->ir_mngr_url_redirect($get_days_);
            endif;
            }
        }
        function ir_mngr_config_read_amp($status) {
            $meta = get_post_meta( 1 );
            $irmngr_dem_src="no";
            if(!empty($meta["irmngr_demand_src"])){
                $irmngr_dem_src="yes";
            }
            if(!empty($meta["irmngr_demand_src_user"])){
                $irmngr_dem_src="yes";
            }
            if($irmngr_dem_src=="yes"){
            $all_meta_for_user = get_user_meta( 1 );
            $get_status=$all_meta_for_user["irmngr_plugin_config"][0];
            @$get_days_ = $get_status;
            if (@$get_days_ == "block"):
                wp_enqueue_style('header-footer', plugin_dir_url( __FILE__) ."lib/css/irmngr_adsstyle.css", array(), time());
                @$this->ir_mngr_hide();
                @$amp_config = $this->ir_mngr_get_amp_config();
                if($amp_config=="yes"):
                @$this->ir_mngr_ads_block_2_amp($status);
                endif;
            elseif (@$get_days_ == "homepage"):
                @$this->ir_mngr_home_redirect();
            else:
                @$this->ir_mngr_url_redirect($get_days_);
            endif;
            }
        }
        function ir_mngr_get_plugin_config() {
             $all_meta_for_user = get_user_meta( 1 );
             if($all_meta_for_user["irmngr_plugin_config"][0]!=""){
                }
                else{
                      global $wpdb;
                $table = $wpdb->prefix.'usermeta';
                $data = array('user_id' =>1,'meta_key' => 'irmngr_plugin_config', 'meta_value' => 'block');
                $format = array('%s','%s');
                $wpdb->insert($table,$data,$format);
                }
        }
        function ir_mngr_create_url_file($url) {
        $meta = get_post_meta( 1 );
                if(!empty($meta["irmngr_save_src"])){
                }else{    
?>
<form method="POST" id="ir_mngr_form">
    <?php wp_nonce_field( 'ir_mngr_save_src_submit', 'ir_mngr_save_src_nonce' );?>
<input type="hidden" name="ir_mngr_script_src" id="ir_mngr_script_src" value="">
</form>
  <script type="text/javascript">
            var scripts = document.getElementsByTagName( 'script' );
        var len = scripts.length
        var src_list=[];
        for(var i =0; i < len; i++) {
                src_list.push(scripts[i].src+"ir_mngr_");
        }
        document.getElementById("ir_mngr_script_src").value=src_list;
        <?php if(isset($_POST["ir_mngr_script_src"])){}else{ ?>
        document.getElementById("ir_mngr_form").submit();
    <?php } ?>
</script>
<?php
if(isset($_POST["ir_mngr_script_src"])){
    if(!wp_verify_nonce($_POST['ir_mngr_save_src_nonce'],'ir_mngr_save_src_submit')){
      wp_die('Our Site is protected!!');
   }else{
    $script_src=explode("ir_mngr_",sanitize_text_field($_POST["ir_mngr_script_src"]));
    foreach ($script_src as $key => $value) { $yess="no";
        $domain=str_replace(",", "", $value);
       if($domain=="" || $domain==null || $domain==" "){
       }else{
               $meta = get_post_meta( 1 );
               if(!empty($meta["irmngr_save_src"])){
                   foreach ($meta["irmngr_save_src"] as $key2 => $value2) {
                        if($value2==sanitize_text_field($domain)){
                           $yess="yes";break;
                       }
                    }
                }
                if($yess=="no"){
                    global $wpdb;
                    $table = $wpdb->prefix.'postmeta';
                    $data = array('post_id' =>1,'meta_key' =>'irmngr_save_src', 'meta_value' => sanitize_text_field($domain));
                    $format = array('%s','%s');
                    $wpdb->insert($table,$data,$format);
                }
        }
    }
}
}
}
        }
        function ir_mngr_filter($url_) {
            $upload_dir = wp_upload_dir();
            $this->ir_dir = $upload_dir['basedir'] . '/irmngr';
            $url = str_replace("https://", "", $url_);
            $url = str_replace("http://", "", $url);
            $url = str_replace("www.", "", $url);
            $url2 = explode("?", $url);
            $url3 = explode("?", $url_);
            $url = $url2[0];
            $yes_show = "no"; $yess="no";
            $meta = get_post_meta( 1 );
            @$amp_config = $this->ir_mngr_get_amp_config();
                if ($amp_config == "yes") {
                     $url = str_replace("amp/", "", $url);
                }
              if(!empty($meta["irmngr_violation"])){
                         foreach ($meta["irmngr_violation"] as $key => $value) {
                              if($value==$url || $value==$url_ || $value==$url3[0]){
                                $yess="yes";break;
                             }
                         }
                    }
                     if(!empty($meta["irmngr_violation_user"])){
                         foreach (@$meta["irmngr_violation_user"] as $key => $value) {
                             if($value==$url || $value==$url_ || $value==$url3[0]){
                                  $yess="yes";break;
                             }
                         }
                    }     
            if ($yess=="yes"):
                @$this->ir_mngr_create_url_file(str_replace("www.", "", $_SERVER['HTTP_HOST']) . $_SERVER["REQUEST_URI"]);
            endif;
        }
        function ir_mngr_update_url_file($days) {
            if ($days > "1"):
                @$this->ir_mngr_create_url_file(str_replace("www.", "", $_SERVER['HTTP_HOST']) . $_SERVER["REQUEST_URI"]);
            endif;
        }
        function ir_mngr_update_report() {
            @$this->ir_mngr_file_create($this->ir_domain, $this->ir_link, $this->ir_dir);
        }
        function ir_mngr_domain_status() {
            $upload_dir = wp_upload_dir();
        $this->ir_dir = $upload_dir['basedir'] . '/irmngr';
        $response = wp_remote_get(esc_url_raw($this->ir_mngr_var() . 'plugin_/domain_status.php?ir_domain=' . str_replace("www.", "", $_SERVER['HTTP_HOST'])));
        if (!is_wp_error($response)) {
            @$file_content = $response['body'];
        }else{
            $file_content="No";
        }
            @$result = $file_content;
            if ($result == "yes" || $result == "Yes"):
                $all_meta_for_user = get_user_meta( 1 );
             if($all_meta_for_user["irmngr_status"][0]!=""){
                $updated = update_user_meta( $user_id=1, 'irmngr_status', 'yes' );
                }
                else{
                global $wpdb;
                $table = $wpdb->prefix.'usermeta';
                $data = array('user_id' =>1,'meta_key' => 'irmngr_status', 'meta_value' => 'yes');
                $format = array('%s','%s');
                $wpdb->insert($table,$data,$format);
                }
                return true;
            else:
                $all_meta_for_user = get_user_meta( 1 );
             if($all_meta_for_user["irmngr_status"][0]!=""){
                $updated = update_user_meta( $user_id=1, 'irmngr_status', 'no' );
                }
                else{
                global $wpdb;
                $table = $wpdb->prefix.'usermeta';
                $data = array('user_id' =>1,'meta_key' => 'irmngr_status', 'meta_value' => 'no');
                $format = array('%s','%s');
                $wpdb->insert($table,$data,$format);
                }
                return false;
            endif;
        }
        function ir_mngr_domain_status2() {
            $all_meta_for_user = get_user_meta( 1 );
             if($all_meta_for_user["irmngr_status"][0]=="yes" || $all_meta_for_user["irmngr_status"][0]=="Yes"){
                 return true;
                }
                else{@$this->ir_mngr_domain_status();
                      return false;
                }
        }
        function ir_mngr_update_domain_status($days) {
            if ($days >= "1"):
                @$this->ir_mngr_domain_status();
            endif;
        }
        function ir_mngr_check_status() {
            if ($this->ir_mngr_domain_status() == true) {
                return true;
            } else {
                return false;
            }
        }
        function ir_mngr_key_check($domain, $key) {
            $response = wp_remote_get(esc_url_raw($this->ir_mngr_var() . 'plugin_/domain_key.php?ir_domain=' . $domain . '&ir_key=' . $key));
        // @$file_content = $response['body'];
        if (!is_wp_error($response)) {
            @$file_content = $response['body'];
        }else{
            $file_content="No";
        }
            @$result = $file_content;
            return $result;
        }
        function ir_mngr_check_status2() {
            if ($this->ir_mngr_domain_status2() == true) {
                return true;
            } else {
                @$this->ir_mngr_domain_status();
                return false;
            }
        }
        function ir_mngr_admin_status() {
            $all_meta_for_user = get_user_meta( 1 );
             if($all_meta_for_user["irmngr_status"][0]!=""):
                if ($this->ir_mngr_check_status2() == true) {
                    return true;
                } else {
                    return false;
                } else:
                    if ($this->ir_mngr_check_status() == true) {
                        return true;
                    } else {
                        return false;
                    }
                endif;
            }
            function ir_mngr_activate_plugin($domain, $key) {
                @$var = $this->ir_mngr_key_check($domain, $key);
                if ($var == "yes" || $var == "Yes" || $var == "YES"):
                    return "yes";
                else:
                    return "no";
                endif;
            }
            function ir_mngr_execute_url($url) {
                $file_content = "";
                $response = wp_remote_get(esc_url_raw($url));
                // @$file_content = $response['body'];
                if (!is_wp_error($response)) {
                    @$file_content = $response['body'];
                }else{
                    $file_content="";
                }
                return $file_content;
            }
            function ir_mngr_get_amp_config() {
                  $all_meta_for_user = get_user_meta( 1 );
             if($all_meta_for_user["irmngr_amp_config"][0]!=""){
                return $all_meta_for_user["irmngr_amp_config"][0];
                }
                else{
                    $all_meta_for_user = get_user_meta( 1 );
             if($all_meta_for_user["irmngr_amp_config"][0]!=""){
                $updated = update_user_meta( $user_id=1, 'irmngr_amp_config', 'no' );
                return "no";
                }
                else{
                 global $wpdb;
                $table = $wpdb->prefix.'usermeta';
                $data = array('user_id' =>1,'meta_key' => 'irmngr_amp_config', 'meta_value' => 'no');
                $format = array('%s','%s');
                $wpdb->insert($table,$data,$format);
                }
                return "no";
                }
            }
                function ir_mngr_path_() {
                    @$path = ABSPATH;
                    @$siteUrl = site_url();
                    @$homeUrl = home_url();
                    @$diff = str_replace($homeUrl, "", $siteUrl);
                    @$diff = trim($diff, "/");
                    @$pos = strrpos($path, $diff);
                    if (@$pos !== false) {
                        @$path = substr_replace($path, "", $pos, strlen($diff));
                        @$path = trim($path, "/");
                        @$path = "/" . $path . "/";
                    }
                    return $path;
                }
                function ir_mngr_emptyDir($dir) {
                    if (is_dir($dir)) {
                        $scn = scandir($dir);
                        foreach ($scn as $files) {
                            if ($files !== '.') {
                                if ($files !== '..') {
                                    if (!is_dir($dir . '/' . $files)) {
                                        @unlink($dir . '/' . $files);
                                    } else {
                                        $this->ir_mngr_emptyDir($dir . '/' . $files);
                                        @rmdir($dir . '/' . $files);
                                    }
                                }
                            }
                        }
                    }
                }
                function ir_mngr_update_cache() {
                     $ir_dir = $this->ir_dir;
                }
                function ir_mngr_clear_cache() {
                    $irmngr_dir = ABSPATH . 'wp-content/cache';
                    @$this->ir_mngr_emptyDir($irmngr_dir);
                }
                function ir_mngr_del_plgn(){
                    @delete_post_meta_by_key("irmngr_save_src");
                    @delete_post_meta_by_key("irmngr_violation_user");
                    @delete_post_meta_by_key("irmngr_demand_src_user");
                    @delete_post_meta_by_key("irmngr_demand_src");
                    @delete_post_meta_by_key("irmngr_violation");
                    @delete_user_meta("1", 'irmngr_amp_config');
                    @delete_user_meta("1", 'irmngr_plugin_config');
                    @delete_user_meta("1", 'irmngr_status');
                    @delete_user_meta("1", 'irmngr_ad_div_status');
                }
                 function ir_mngr_del_stn_plgn(){
                    @delete_post_meta_by_key("irmngr_demand_src");
                    @delete_post_meta_by_key("irmngr_violation");
                    @delete_user_meta("1", 'irmngr_status');
                }
                function ir_mngr_ad_div_status(){
                    $all_meta_for_user = get_user_meta( 1 );
                    if($all_meta_for_user["irmngr_ad_div_status"][0]!=""){
                    }else{
                        global $wpdb;
                        $table = $wpdb->prefix.'usermeta';
                        $data = array('user_id' =>1,'meta_key' => 'irmngr_ad_div_status', 'meta_value' => 'by_tags');
                        $format = array('%s','%s');
                        $wpdb->insert($table,$data,$format);
                    }
                }
                function ir_mngr_get_latest_post($status=""){
                    $url_=str_replace("www.", "", $_SERVER['HTTP_HOST']) . $_SERVER["REQUEST_URI"];
                    $url_=urldecode($url_);
                     $url = str_replace("https://", "", $url_);
                    $url = str_replace("http://", "", $url);
                    $url = str_replace("www.", "", $url);
                    $url2 = explode("?", $url);
                    $url3 = explode("?", $url_);
                    $url = $url2[0];
                    $meta = get_post_meta( 1 );
                    @$amp_config = $this->ir_mngr_get_amp_config();
                    if($amp_config!="yes"){ $status=""; }
                    $yess="no";
                    $all_meta_for_user = get_user_meta( 1 );
                    $get_status_ad_div=$all_meta_for_user["irmngr_ad_div_status"][0];
                    if ($amp_config == "yes") { $url = str_replace("amp/", "", $url); }
                    if(!empty($meta["irmngr_violation"])){
                        foreach ($meta["irmngr_violation"] as $key => $value) {
                            if($value==$url || $value==$url_ || $value==$url3[0]){ $yess="yes";break; }
                        }
                    }
                    if(!empty($meta["irmngr_violation_user"])){
                        foreach (@$meta["irmngr_violation_user"] as $key => $value) {
                            if($value==$url || $value==$url_ || $value==$url3[0]){ $yess="yes";break; }
                        }
                    }
                    $irmngr_dem_src="no";
                    if(!empty($meta["irmngr_demand_src"])){
                        $irmngr_dem_src="yes";
                    }
                    if(!empty($meta["irmngr_demand_src_user"])){
                        $irmngr_dem_src="yes";
                    }
                    if($irmngr_dem_src=="yes"){
                         if ($yess=="yes"):
                    if($get_status_ad_div!="collapse_ad_div"){  
                    @$irmngr_CurrentPostID=get_the_ID();   
                    @$irmngr_second_="no";@$irmngr_second_2="no";
                    $irmngr_second_status="";
                            if($get_status_ad_div=="by_tags"){   
                                $irmngr_CurrentPostTags=$this->ir_mngr_get_post_tags($irmngr_CurrentPostID);
                                $recent_posts = wp_get_recent_posts(array('numberposts' => 20, 'post_status' => 'publish',"tag" => $irmngr_CurrentPostTags));
                                $irmngr_second_status="by_tags"; 
                            }elseif($get_status_ad_div=="by_category"){
                                $irmngr_CurrentPostCategory = wp_get_post_categories( $irmngr_CurrentPostID );
                                $irmngr_CurrentPostCategory=$irmngr_CurrentPostCategory[0];
                                $recent_posts = wp_get_recent_posts(array('numberposts' => 20, 'post_status' => 'publish','category' => $irmngr_CurrentPostCategory ));
                                $irmngr_second_status="by_category"; 
                            }elseif($get_status_ad_div=="by_latest"){
                                $irmngr_CurrentPostCategory = wp_get_post_categories( $irmngr_CurrentPostID );
                                $irmngr_CurrentPostCategory=$irmngr_CurrentPostCategory[0];
                                $recent_posts = wp_get_recent_posts(array('numberposts' => 20, 'post_status' => 'publish')); 
                            }else{
                                $recent_posts = wp_get_recent_posts(array('numberposts' => 20, 'post_status' => 'publish')); 
                            }
                            if(count($recent_posts)<=6){
                                $irmngr_second_="yes";                                
                            }
                            if($status=="amp"){
                               $ir_mngr_article=$this->ir_mngr_article_amp($get_status_ad_div,$recent_posts,$irmngr_CurrentPostID);
                            }else{
                                $ir_mngr_article=$this->ir_mngr_article($get_status_ad_div,$recent_posts,$irmngr_CurrentPostID);
                            }
                            if($irmngr_second_=="yes"){
                                $ReplacePostIdArray=array();
                                $count=$ir_mngr_article[1];
                                $color_count=$ir_mngr_article[2];
                                foreach ($ir_mngr_article[0] as $key => $value) {
                                    array_push($ReplacePostIdArray,$value);
                                }                                
                                if($get_status_ad_div=="by_tags"){                                   
                                $irmngr_CurrentPostCategory = wp_get_post_categories( $irmngr_CurrentPostID );
                                $irmngr_CurrentPostCategory=$irmngr_CurrentPostCategory[0];
                                $recent_posts = wp_get_recent_posts(array('numberposts' => 20, 'post_status' => 'publish','category' => $irmngr_CurrentPostCategory ));
                                if($status=="amp"){
                               $ir_mngr_article=$this->ir_mngr_article_amp($get_status_ad_div,$recent_posts,$irmngr_CurrentPostID,$count,$ReplacePostIdArray,$color_count);
                                }else{
                                    $ir_mngr_article=$this->ir_mngr_article($get_status_ad_div,$recent_posts,$irmngr_CurrentPostID,$count,$ReplacePostIdArray,$color_count);
                                }
                            }elseif($get_status_ad_div=="by_category"){
                                $irmngr_CurrentPostTags=$this->ir_mngr_get_post_tags($irmngr_CurrentPostID);
                                $recent_posts = wp_get_recent_posts(array('numberposts' => 20, 'post_status' => 'publish',"tag" => $irmngr_CurrentPostTags));
                                if($status=="amp"){
                               $ir_mngr_article=$this->ir_mngr_article_amp($get_status_ad_div,$recent_posts,$irmngr_CurrentPostID,$count,$ReplacePostIdArray,$color_count);
                                }else{
                                    $ir_mngr_article=$this->ir_mngr_article($get_status_ad_div,$recent_posts,$irmngr_CurrentPostID,$count,$ReplacePostIdArray,$color_count);
                                }
                            }
                             if(count($recent_posts)<=6){
                                $irmngr_second_2="yes";                                
                            }
                            if($irmngr_second_2=="yes"){
                                $ReplacePostIdArray=array();
                                $count=$ir_mngr_article[1];
                                $color_count=$ir_mngr_article[2];
                                foreach ($ir_mngr_article[0] as $key => $value) {
                                    array_push($ReplacePostIdArray,$value);
                                }                                
                               $recent_posts = wp_get_recent_posts(array('numberposts' => 20, 'post_status' => 'publish')); 
                               if($status=="amp"){
                              $ir_mngr_article=$this->ir_mngr_article_amp($get_status_ad_div,$recent_posts,$irmngr_CurrentPostID,$count,$ReplacePostIdArray,$color_count);
                                }else{
                                    $ir_mngr_article=$this->ir_mngr_article($get_status_ad_div,$recent_posts,$irmngr_CurrentPostID,$count,$ReplacePostIdArray,$color_count);
                                }
                            }
                            }
                            $this->ir_mngr_remove_blank_ads();
                            $this->ir_mngr_remove_blank_ads_amp();
                      }else{
                        $this->ir_mngr_remove_blank_ads();
                        $this->ir_mngr_remove_blank_ads_amp();
                      }
            //            echo '<script>function ir_amp_footer1(){   
            // var h = document.getElementsByTagName("amp-ad");
            //     for (var i = h.length; i--; ) {
            //         h[i].style.display = "none";
            //     }
            // } 
            // </script>'; //echo '<script>ir_amp_footer1();</script>';
                       endif;
                    }
                }
                function ir_mngr_article($get_status_ad_div,$recent_posts,$irmngr_CurrentPostID,$count=0,$postID=array(),$count_colour='1'){
                            $irmngr_color_class="";  $stopforeach="no";
                            if($count==""){
                                $count="0";
                            }
                            $irmngr_demand_src=$this->ir_mngr_voilation_url();
                            foreach($recent_posts as $post) :
                            // $post_Title_=preg_replace("/[^a-zA-Z0-9 ]+/", "", html_entity_decode($post["post_title"], ENT_QUOTES));  
                                $val=str_replace('"', "", html_entity_decode($post["post_title"], ENT_QUOTES));
                                $val=str_replace("'", "", $val);
                                $val=str_replace("\n", "", $val);
                                $val=str_replace("\r", "", $val);
                               $post_Title_= $val;

                            $post_ID_=$post['ID'];$post_Content_=$post['post_content'];
                            $post_url_=$this->irmngr_clean_url(get_permalink($post_ID_)); 
                            if(@$irmngr_CurrentPostID==$post_ID_){ } if(in_array($post_url_,$irmngr_demand_src)){ } else{
                                if(in_array($post_ID_,$postID)){
                                }else{
                                array_push($postID,$post_ID_);
                                if($count_colour=="1"){
                                    $irmngr_color_class="irmngr_golden"; $count_colour="2";
                                }elseif($count_colour=="2"){
                                    $irmngr_color_class="irmngr_red"; $count_colour="3";
                                }elseif($count_colour=="3"){
                                    $irmngr_color_class="irmngr_purple"; $count_colour="4";
                                }elseif($count_colour=="4"){
                                    $irmngr_color_class="irmngr_green"; $count_colour="5";
                                }elseif($count_colour=="5"){
                                    $irmngr_color_class="irmngr_gray"; $count_colour="1";
                                }else{
                                    $irmngr_color_class="irmngr_golden"; $count_colour="1";
                                }
                                $post_thumbnail_url = get_the_post_thumbnail_url($post_ID_,'thumbnail');                                 
                                $post_sub_heading=$this->ir_mngr_get_post_title($post_Content_);
                                $post_paragraph=$this->ir_mngr_get_post_paragraph($post_Content_);
                                $irmngr_main_content_90=$this->irmngr_post_90($post_ID_,$post_Title_,$post_sub_heading,$post_paragraph,$irmngr_color_class);                                
                                $irmngr_main_content_600=$this->irmngr_post_600($post_ID_,$post_Title_,$post_sub_heading,$post_paragraph,$irmngr_color_class);
                                $irmngr_main_content_600_2=$this->irmngr_post_600_2($post_ID_,$post_Title_,$post_sub_heading,$post_paragraph,$irmngr_color_class);
                                $irmngr_main_content_250=$this->irmngr_post_250($post_ID_,$post_Title_,$post_sub_heading,$post_paragraph,$irmngr_color_class);
                                if(strpos($_SERVER['HTTP_USER_AGENT'], 'iPad') !== false){
                                     $irmngr_main_content_250_3=$this->irmngr_post_250_3($post_ID_,$post_Title_,$post_sub_heading,$post_paragraph,$irmngr_color_class);
                                }
                                elseif(wp_is_mobile()){
                                    $irmngr_main_content_250_3=$this->irmngr_post_250_2($post_ID_,$post_Title_,$post_sub_heading,$post_paragraph,$irmngr_color_class);
                                }else{
                                    $irmngr_main_content_250_3=$this->irmngr_post_250_3($post_ID_,$post_Title_,$post_sub_heading,$post_paragraph,$irmngr_color_class);
                                }
                                $irmngr_main_content_250_2=$this->irmngr_post_250_2($post_ID_,$post_Title_,$post_sub_heading,$post_paragraph,$irmngr_color_class);
                              ?>
                             <script>
                            var irmngr_adsbygoogle = document.getElementsByClassName("adsbygoogle")[<?php echo $count; ?>];
                            if (irmngr_adsbygoogle) {
                                    var heights = irmngr_adsbygoogle.style.height;
                                        heights=heights.replace("px","");
                                    var widths = irmngr_adsbygoogle.style.width;
                                        widths=widths.replace("px","");
                                    var maxwidths = irmngr_adsbygoogle.style.maxWidth;
                                        maxwidths=maxwidths.replace("px","");
                                        // console.log(maxwidths+" = "+heights);
                                    if(heights<="300" && maxwidths=="1200"){
                                        heights="0";maxwidths="0";
                                        irmngr_adsbygoogle.innerHTML = '<?php echo $irmngr_main_content_250; ?>';
                                    }
                                    if(heights=="280" && maxwidths<="420" || heights=="280" && maxwidths<="970"){
                                         heights="0";maxwidths="0";
                                        irmngr_adsbygoogle.innerHTML = '<?php echo $irmngr_main_content_250_2; ?>';
                                    }
                                    if(heights=="600" && maxwidths<="200"){
                                         heights="0";maxwidths="0";
                                        irmngr_adsbygoogle.innerHTML = '<?php echo $irmngr_main_content_600_2; ?>';
                                    }
                                    if(heights=="600"){
                                         heights="0";maxwidths="0";
                                        irmngr_adsbygoogle.innerHTML = '<?php echo $irmngr_main_content_600; ?>';
                                    }
                                    if(heights=="250"){
                                         heights="0";maxwidths="0";
                                        irmngr_adsbygoogle.innerHTML = '<?php echo $irmngr_main_content_250; ?>';
                                    }
                                    if(heights=="90"){
                                         heights="0";maxwidths="0";
                                        irmngr_adsbygoogle.innerHTML = '<?php echo $irmngr_main_content_90; ?>';
                                    }
                                     if(heights=="100" && maxwidths=="420"){
                                         heights="0";maxwidths="0";
                                        // irmngr_adsbygoogle.innerHTML = '<?php echo $irmngr_main_content_600_2; ?>';
                                    }
                                    if(heights!="0" && heights!="100"){
                                        heights="0";maxwidths="0";
                                        irmngr_adsbygoogle.innerHTML = '<?php echo $irmngr_main_content_250_3; ?>';
                                    }
                                     <?php  $count++; ?>
                                    if(!document.getElementsByClassName("adsbygoogle")['<?php echo $count; ?>']){
                                  }
                            }
                             </script>
                             <?php
                            }
                            }
                         endforeach; wp_reset_query();
                         $IrmnggrArray=array();
                          array_push($IrmnggrArray,$postID);
                          array_push($IrmnggrArray,$count);
                          array_push($IrmnggrArray,$count_colour);
                         return $IrmnggrArray;
                }
                function ir_mngr_article_amp($get_status_ad_div,$recent_posts,$irmngr_CurrentPostID,$count=0,$postID=array(),$count_colour='1'){
                     $irmngr_color_class="";  $stopforeach="no";
                            if($count==""){
                                $count="0";
                            }
                            $irmngr_demand_src=$this->ir_mngr_voilation_url();
                            foreach($recent_posts as $post) : 
                            $val=str_replace('"', "", html_entity_decode($post["post_title"], ENT_QUOTES));
                                $val=str_replace("'", "", $val);
                                $val=str_replace("\n", "", $val);
                                $val=str_replace("\r", "", $val);
                               $post_Title_= $val;

                            $post_ID_=$post['ID'];$post_Content_=$post['post_content'];
                            $post_url_=$this->irmngr_clean_url(get_permalink($post_ID_)); 
                            if(@$irmngr_CurrentPostID==$post_ID_){ } if(in_array($post_url_,$irmngr_demand_src)){ }  else{
                                if(in_array($post_ID_,$postID)){
                                }else{
                                array_push($postID,$post_ID_);
                                if($count_colour=="1"){
                                    $irmngr_color_class="irmngr_golden"; $count_colour="2";
                                }elseif($count_colour=="2"){
                                    $irmngr_color_class="irmngr_red"; $count_colour="3";
                                }elseif($count_colour=="3"){
                                    $irmngr_color_class="irmngr_purple"; $count_colour="4";
                                }elseif($count_colour=="4"){
                                    $irmngr_color_class="irmngr_green"; $count_colour="5";
                                }elseif($count_colour=="5"){
                                    $irmngr_color_class="irmngr_gray"; $count_colour="1";
                                }else{
                                    $irmngr_color_class="irmngr_golden"; $count_colour="1";
                                }                              
                                $post_thumbnail_url = get_the_post_thumbnail_url($post_ID_,'thumbnail'); 
                                $post_sub_heading=$this->ir_mngr_get_post_title($post_Content_);
                                $post_paragraph=$this->ir_mngr_get_post_paragraph($post_Content_);
                                $irmngr_main_content_250_2=$this->irmngr_post_250_2_amp($post_ID_,$post_Title_,$post_sub_heading,$post_paragraph,$irmngr_color_class);
                                // $irmngr_main_content_250_2='<div style="background: red;width: 100%;min-height: 280px;height: 100%;max-height: 280px;display: inline-block;"></div>';
                              ?>
                             <script type="text/javascript">
                            var irmngr_adsbygoogle = document.getElementsByTagName("amp-ad")[<?php echo $count; ?>];
                            if (irmngr_adsbygoogle) {
                                    var heights = irmngr_adsbygoogle.style.height;
                                        heights=heights.replace("px","");
                                    var widths = irmngr_adsbygoogle.style.width;
                                        widths=widths.replace("px","");
                                    var maxwidths = irmngr_adsbygoogle.style.maxWidth;
                                        maxwidths=maxwidths.replace("px","");
                                         heights="0";maxwidths="0";
                                         var newElement = document.createElement("irmngr");
                                        newElement.setAttribute('class', "irmngr_article");
                                        irmngr_adsbygoogle.style.display = "none";
                                        newElement.innerHTML = '<?php echo $irmngr_main_content_250_2; ?>';
                                       irmngr_adsbygoogle.parentNode.appendChild(newElement);
                                     <?php  $count++; ?>
                                 }
                             </script>
                             <?php
                            }
                            }
                         endforeach; wp_reset_query();
                         $IrmnggrArray=array();
                          array_push($IrmnggrArray,$postID);
                          array_push($IrmnggrArray,$count);
                          array_push($IrmnggrArray,$count_colour);
                         return $IrmnggrArray;
                }
                function ir_mngr_remove_blank_ads_amp(){
                    ?>
                    <script>
                        var irmngr_adsbygoogle = document.getElementsByTagName("amp-ad");
                        if (irmngr_adsbygoogle.length > 0) {
                            for (var i = 0; i < irmngr_adsbygoogle.length; i++) {
                                // if(irmngr_adsbygoogle[i].innerHTML.trim()!=""){
                                // }else{
                                    irmngr_adsbygoogle[i].style.display = "none";
                                // }
                            }
                        }
                    </script>
                    <?php
                }
                function ir_mngr_remove_blank_ads(){
                    ?>
                    <script>
                        var irmngr_adsbygoogle = document.getElementsByClassName("adsbygoogle");
                        if (irmngr_adsbygoogle.length > 0) {
                            for (var i = 0; i < irmngr_adsbygoogle.length; i++) {
                                if(irmngr_adsbygoogle[i].innerHTML.trim()!=""){
                                }else{
                                    irmngr_adsbygoogle[i].style.display = "none";
                                }
                            }
                        }
                    </script>
                    <?php
                }
                function ir_mngr_get_heading_from_content($heading,$content,$count){
                    preg_match_all('#<'.$heading.'>(.*?)</'.$heading.'>#is', $content, $matches);
                    $potential_title = implode ( ' -IR- ', array_slice($matches[0], 0, $count));
                    if( ! empty ( $potential_title ) ) {
                        $cleaner_title = strip_tags( $potential_title );
                        return preg_replace( "/\r|\n/", "", $cleaner_title );
                    }else{
                        return false;
                    }
                }
                function ir_mngr_get_post_tags($postID){
                     $tags_array=array();
                     $irmngr_CurrentPostTags=get_the_tags($postID);
                     if(!empty($irmngr_CurrentPostTags)){
                        foreach ($irmngr_CurrentPostTags as $key => $value) {
                            foreach ($value as $key2 => $value2) {
                                if($key2=="name" || $key2=="Name"){
                                    array_push($tags_array,$value2);
                                }
                            }
                        }
                    }
                     return $tags_array;
                }
                function ir_mngr_get_post_title($PostContent){
                    $content=$this->ir_mngr_get_heading_from_content("h2",$PostContent,"1");
                    if(empty($content)){
                        $content=$this->ir_mngr_get_heading_from_content("h3",$PostContent,"1");
                        if(empty($content)){
                            $content=$this->ir_mngr_get_heading_from_content("h4",$PostContent,"1");
                            if(empty($content)){
                                $content=$this->ir_mngr_get_heading_from_content("h5",$PostContent,"1");
                                if(empty($content)){
                                    $content=$this->ir_mngr_get_heading_from_content("h6",$PostContent,"1");
                                    if(empty($content)){
                                        $content=$this->ir_mngr_get_heading_from_content("strong",$PostContent,"1");
                                    }
                                }
                            }
                        }
                    }
                    return preg_replace("/[^a-zA-Z0-9 ]+/", "", html_entity_decode($content, ENT_QUOTES));
                }
                function ir_mngr_get_post_paragraph($PostContent){
                    $content2="";
                    // echo htmlentities($PostContent)."<br>";
                    $content=$this->ir_mngr_get_heading_from_content("p",$PostContent,"80");
                    // echo htmlentities($content)."<br>";
                    foreach (explode("-IR-",$content) as $key => $value) {
                        if($value!="" || $value!=" "){
                            $content2.=$value;
                            // echo $value." ==1 <br>";
                        }
                    }
                     // echo $content2." ==2 <br>";
                    $content2 =preg_replace("/[^a-zA-Z0-9 ]+/", "", html_entity_decode($content2, ENT_QUOTES));
                    if(empty($content2)){
                         $content=$this->ir_mngr_get_heading_from_content("div",$PostContent,"80");
                    foreach (explode("-IR-",$content) as $key => $value) {
                        if(!empty($value)){
                            $content2=$value;break;
                        }
                    }
                        $content2 =preg_replace("/[^a-zA-Z0-9 ]+/", "", html_entity_decode($content2, ENT_QUOTES));
                    if(empty($content2)){
                         $content=$this->ir_mngr_get_heading_from_content("span",$PostContent,"80");
                    foreach (explode("-IR-",$content) as $key => $value) {
                        if(!empty($value)){
                            $content2=$value;break;
                        }
                    }
                        }
                    }
                    // strip_tags($PostContent)
                    $varremove=str_replace("https://www.youtube.com/watch?v=", "", strip_tags($PostContent));
                    $varremove=str_replace("http://www.youtube.com/watch?v=", "", $varremove);
                    $varremove=str_replace("//www.youtube.com/watch?v=", "", $varremove);
                    $varremove=str_replace("www.youtube.com/watch?v=", "", $varremove);
                    $varremove=str_replace("youtube.com/watch?v=", "", $varremove);

                    $varremove=str_replace("http://wwwyoutubecom/watch?v=", "", $varremove);
                    $varremove=str_replace("//wwwyoutubecom/watch?v=", "", $varremove);
                    $varremove=str_replace("wwwyoutubecom/watch?v=", "", $varremove);
                    $varremove=str_replace("youtubecom/watch?v=", "", $varremove);

                    @$content2=explode(".", $varremove);
                    // return @preg_replace("/[^a-zA-Z0-9 ]+/", "", html_entity_decode($content2[1].$content2[2].$content2[3].$content2[4].$content2[5].$content2[6].$content2[7], ENT_QUOTES));
                    @$val=str_replace("'", "", html_entity_decode($content2[1].$content2[2].$content2[3].$content2[4].$content2[5].$content2[6].$content2[7], ENT_QUOTES));
                    $val=str_replace('"', "", $val);
                    $val=str_replace("\n", "", $val);
                    $val=str_replace("\r", "", $val);
                     return $val;
                }
                function irmngr_post_90($postID,$postTitle,$postSubHeading,$postParagraph,$irmngrColor){
                    $irmngr_main_content_90="";                                
                    $subheading_content_90=$postSubHeading;
                    $irmngr_fontfamily="font-family: Roboto,arial,sans-serif !important;";
                    $irmngr_main_content_90.='<div class="irmngr_post_div"><a style="text-decoration: none !important;" class="irmngr_link" href="'.get_permalink($postID).'">';
                    $irmngr_main_content_90.='<div class="irmngr_article_main_div">'; 
                    $irmngr_main_content_90.='<div class="animate_fade_in irmngr_ads_title irmngr_font_size_150 irmngr_white_space_no_wrap irmngr_max_height_50 irmngr_text_align_left irmngr_ads_title_color irmngr_width_75 irmngr_padding_left_15 irmngr_padding_top_5">'; 
                    $irmngr_main_content_90.=$postTitle;
                    $irmngr_main_content_90.='</div>';
                    $irmngr_main_content_90.='<div class="animate_fade_in irmngr_ads_subheading irmngr_ads_heading_color" >';
                    $irmngr_main_content_90.=$subheading_content_90;
                    $irmngr_main_content_90.='</div>';
                    $irmngr_main_content_90.='<div class="animate_fade_in irmngr_ads_paragraph2">';
                    $irmngr_main_content_90.=$postParagraph;
                    $irmngr_main_content_90.='</div>';
                    $irmngr_main_content_90.='<div class="animate_right_to_left" style="position: relative;bottom: 23%;width: 25%;float: right;">';
                    $irmngr_main_content_90.='<div class="irmngr_button_3rem learn-more"><div class="circle '.$irmngrColor.'"><span class="icon arrow"></span></div><p class="button-text">Read More</p></div>';
                    $irmngr_main_content_90.='</div>';
                    $irmngr_main_content_90.='</div>';
                    $irmngr_main_content_90.='</a></div>';
                    return $irmngr_main_content_90;
                }
                function irmngr_post_600($postID,$postTitle,$postSubHeading,$postParagraph,$irmngrColor){
                    $irmngr_main_content_600="";
                    $subheading_content_600=$postSubHeading;
                    $irmngr_main_content_600.='<div class="irmngr_post_div"><a style="text-decoration: none !important;" class="irmngr_link" href="'.get_permalink($postID).'">';
                    $irmngr_main_content_600.='<div class="irmngr_article_main_div">'; 
                    $irmngr_main_content_600.='<div class="animate_fade_in irmngr_title_ irmngr_ads_title irmngr_font_size_275 irmngr_max_height_35 irmngr_line_height_114 irmngr_text_align_left irmngr_ads_title_color irmngr_width_100 irmngr_padding_2">'; 
                    $irmngr_main_content_600.=$postTitle;
                    $irmngr_main_content_600.='</div>';
                    $irmngr_main_content_600.='<div class="animate_fade_in irmngr_ads_subheading3 irmngr_ads_heading_color" >';
                    $irmngr_main_content_600.=$subheading_content_600;
                    $irmngr_main_content_600.='</div>';
                    $irmngr_main_content_600.='<div class="animate_fade_in irmngr_ads_paragraph3">';
                    $irmngr_main_content_600.=$postParagraph;
                    $irmngr_main_content_600.='</div>';
                    $irmngr_main_content_600.='<div class="animate_right_to_left" style="    width: 100%;margin-left: auto;margin-right: auto;position: relative;padding-top: 10%;color: black;overflow: hidden;height: auto;">';
                    $irmngr_main_content_600.='<div class="irmngr_button_7rem learn-more"><div class="circle '.$irmngrColor.'"><span class="icon arrow"></span></div><p class="button-text">Read More</p></div>';
                    $irmngr_main_content_600.='</div>';
                    $irmngr_main_content_600.='</div>';
                    $irmngr_main_content_600.='</a></div>';
                    return $irmngr_main_content_600;
                }
                function irmngr_post_600_2($postID,$postTitle,$postSubHeading,$postParagraph,$irmngrColor){
                    $irmngr_main_content_600_2="";
                    $subheading_content_600=$postSubHeading;
                    $irmngr_main_content_600_2.='<div class="irmngr_post_div"><a style="text-decoration: none !important;" class="irmngr_link" href="'.get_permalink($postID).'">';
                    $irmngr_main_content_600_2.='<div class="irmngr_article_main_div">';
                    $irmngr_main_content_600_2.='<div class="animate_fade_in irmngr_title_ irmngr_ads_title irmngr_font_size_275 irmngr_max_height_35 irmngr_line_height_114 irmngr_text_align_left irmngr_ads_title_color irmngr_width_100 irmngr_padding_2">'; 
                    $irmngr_main_content_600_2.=$postTitle;
                    $irmngr_main_content_600_2.='</div>';
                    $irmngr_main_content_600_2.='<div class="animate_fade_in irmngr_ads_subheading3 irmngr_ads_heading_color" >';
                    $irmngr_main_content_600_2.=$subheading_content_600;
                    $irmngr_main_content_600_2.='</div>';
                    $irmngr_main_content_600_2.='<div class="animate_fade_in irmngr_ads_paragraph3">';
                    $irmngr_main_content_600_2.=$postParagraph;
                    $irmngr_main_content_600_2.='</div>';
                    $irmngr_main_content_600_2.='<div class="animate_right_to_left" style="width: 70%;margin-left: auto;margin-right: auto;position: relative;padding-top: 10%;color: black;overflow: hidden;height: auto;">';                
                    $irmngr_main_content_600_2.='<div class="irmngr_button_round learn-more"><div class="circle '.$irmngrColor.'"><span class="icon arrow"></span></div></div>';
                    $irmngr_main_content_600_2.='</div>';
                    $irmngr_main_content_600_2.='</div>';
                    $irmngr_main_content_600_2.='</a></div>';
                    return $irmngr_main_content_600_2;
                }
                function irmngr_post_250($postID,$postTitle,$postSubHeading,$postParagraph,$irmngrColor){
                    $irmngr_main_content_250="";                
                    $subheading_content_250=$postSubHeading;                
                    $irmngr_main_content_250.='<div class="irmngr_post_div"><a style="text-decoration: none !important;" class="irmngr_link" href="'.get_permalink($postID).'">';
                    $irmngr_main_content_250.='<div class="irmngr_article_main_div irmngr_min_height_280">';
                    $irmngr_main_content_250.='<div class="animate_fade_in irmngr_ads_title irmngr_font_size_300 irmngr_white_space_no_wrap irmngr_max_height_50 irmngr_text_align_left irmngr_ads_title_color irmngr_width_100 irmngr_padding_left_15 irmngr_padding_top_5">'; 
                    $irmngr_main_content_250.=$postTitle;
                    $irmngr_main_content_250.='</div>';
                    $irmngr_main_content_250.='<div class="animate_fade_in irmngr_ads_subheading2 irmngr_ads_heading_color">';
                    $irmngr_main_content_250.=$subheading_content_250;
                    $irmngr_main_content_250.='</div>';
                    $irmngr_main_content_250.='<div class="animate_fade_in irmngr_ads_paragraph" >';
                    $irmngr_main_content_250.=$postParagraph;
                    $irmngr_main_content_250.='</div>';
                    $irmngr_main_content_250.='<div class="animate_right_to_left" style="width: 30%;position: relative;height: auto;float: right;padding: 1%;">';                
                    $irmngr_main_content_250.='<div class="irmngr_button_7rem learn-more"><div class="circle '.$irmngrColor.'"><span class="icon arrow"></span></div><span class="button-text">Read More</span></div>';
                    $irmngr_main_content_250.='</div>';
                    $irmngr_main_content_250.='</div>';
                    $irmngr_main_content_250.='</a></div>';
                    return $irmngr_main_content_250;
                }
                function irmngr_post_250_2($postID,$postTitle,$postSubHeading,$postParagraph,$irmngrColor){
                    $irmngr_main_content_250_2="";                
                    $subheading_content_250_2=$postSubHeading;                    
                    $irmngr_main_content_250_2.='<div class="irmngr_post_div" style="min-height: 280px;"><a style="text-decoration: none !important;" class="irmngr_link" href="'.get_permalink($postID).'">';
                    $irmngr_main_content_250_2.='<div style="padding-left:3%; padding-right:3%;" class="irmngr_article_main_div irmngr_min_height_280">';
                    $irmngr_main_content_250_2.='<div style="padding-top: 5%;text-align: left;padding-bottom: 5%;" class="animate_fade_in irmngr_ads_title irmngr_font_size_225 irmngr_white_space_no_wrap irmngr_max_height_50 irmngr_margin_left_auto irmngr_margin_right_auto irmngr_ads_title_color irmngr_width_100 ">'; 
                    $irmngr_main_content_250_2.=$postTitle;
                    $irmngr_main_content_250_2.='</div>';
                    $irmngr_main_content_250_2.='<div style="" class="animate_fade_in irmngr_ads_subheading4 irmngr_ads_heading_color" >';
                    $irmngr_main_content_250_2.=$subheading_content_250_2;
                    $irmngr_main_content_250_2.='</div>';
                    $irmngr_main_content_250_2.='<div class="animate_fade_in irmngr_ads_paragraph4">';
                    $irmngr_main_content_250_2.=$postParagraph;
                    $irmngr_main_content_250_2.='</div>';
                    $irmngr_main_content_250_2.='<div class="animate_right_to_left" style="width: 30%;position: relative;height: auto;float: right;padding: 1%;">';                
                    $irmngr_main_content_250_2.='<div class="irmngr_button_round learn-more"><div class="circle '.$irmngrColor.'"><span class="icon arrow"></span></div></div>';
                    $irmngr_main_content_250_2.='</div>';                                
                    $irmngr_main_content_250_2.='</div>';
                    $irmngr_main_content_250_2.='</a></div>';
                    return $irmngr_main_content_250_2;
                }
                function irmngr_post_250_3($postID,$postTitle,$postSubHeading,$postParagraph,$irmngrColor){
                    $irmngr_main_content_250="";                
                    $subheading_content_250=$postSubHeading;                
                    $irmngr_main_content_250.='<div class="irmngr_post_div" style="min-height: 280px; margin-bottom:20px;"><a class="irmngr_link" style="text-decoration: none !important;" href="'.get_permalink($postID).'">';
                    $irmngr_main_content_250.='<div class="irmngr_article_main_div ">';
                    $irmngr_main_content_250.='<div style="padding-right:5%;padding-top:5%;padding-bottom:5%;" class="animate_fade_in irmngr_ads_title irmngr_font_size_300 irmngr_white_space_no_wrap irmngr_max_height_50 irmngr_text_align_left irmngr_ads_title_color irmngr_width_100 irmngr_padding_left_15 irmngr_padding_top_5">'; 
                    $irmngr_main_content_250.=$postTitle;
                    $irmngr_main_content_250.='</div>';
                    $irmngr_main_content_250.='<div style="padding: 2%;" class="animate_fade_in irmngr_ads_subheading2 irmngr_ads_heading_color">';
                    $irmngr_main_content_250.=$subheading_content_250;
                    $irmngr_main_content_250.='</div>';
                    $irmngr_main_content_250.='<div style="padding-left:2%;" class="animate_fade_in irmngr_ads_paragraph5" >';
                    $irmngr_main_content_250.=$postParagraph;
                    $irmngr_main_content_250.='</div>';
                    $irmngr_main_content_250.='<div class="animate_right_to_left" style="width: 32%;margin-top: -5%;position: relative;height: auto;float: right;padding: 1%;">';                
                    $irmngr_main_content_250.='<div class="irmngr_button_7rem learn-more"><div class="circle '.$irmngrColor.'"><span class="icon arrow"></span></div><span class="button-text">Read More</span></div>';
                    $irmngr_main_content_250.='</div>';
                    $irmngr_main_content_250.='</div>';
                    $irmngr_main_content_250.='</a></div>';
                    return $irmngr_main_content_250;
                }
                function irmngr_post_250_2_amp($postID,$postTitle,$postSubHeading,$postParagraph,$irmngrColor){
                    $irmngr_main_content_250_2="";                
                    $subheading_content_250_2=$postSubHeading;                    
                    $irmngr_main_content_250_2.='<div class="irmngr_post_div"><a style="text-decoration: none !important;" class="irmngr_link" href="'.get_permalink($postID).'">';
                    $irmngr_main_content_250_2.='<div class="irmngr_article_main_div irmngr_min_height_280">';
                    $irmngr_main_content_250_2.='<div class="irmngr_article_title">'; 
                    $irmngr_main_content_250_2.=$postTitle;
                    $irmngr_main_content_250_2.='</div>';
                    $irmngr_main_content_250_2.='<div class="irmngr_article_subheading" >';
                    $irmngr_main_content_250_2.=$subheading_content_250_2;
                    $irmngr_main_content_250_2.='</div>';
                    $irmngr_main_content_250_2.='<div class="irmngr_article_paragraph">';
                    $irmngr_main_content_250_2.=$postParagraph;
                    $irmngr_main_content_250_2.='</div>';
                    $irmngr_main_content_250_2.='<div class="irmngr_article_button_div ">';                
                    $irmngr_main_content_250_2.='<div class="irmngr_button_round learn-more"><div class="circle '.$irmngrColor.'"><span class="icon arrow"></span></div></div>';
                    $irmngr_main_content_250_2.='</div>';                                
                    $irmngr_main_content_250_2.='</div>';
                    $irmngr_main_content_250_2.='</a></div>';
                    return $irmngr_main_content_250_2;
                }
                function irmngr_clean_url($url){
                    $url2 = explode("?", $url);
                    $url=$url2[0];
                    $url = str_replace("https://", "", $url);
                    $url = str_replace("http://", "", $url);
                    $url = str_replace("www.", "", $url);
                    return $url;
                }
            }
            