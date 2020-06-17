<?php
if ($_POST["name"]) {
    // $to = "hello@airtci.com";
    $to = "mfickens@airtci.com";
    $subject = "Message from airtci.com";
    $headers = "From: airtci";
    
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $service = filter_input(INPUT_POST, 'service', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    $content = "Hello dad, I have successfully published your site to airtci.com and wired up the email script.\r\n";
    $content .= "Please call me around noon tomorrow.\r\n\n";

    $content .= "Hello,\r\n\n";
    $content .= "You have recieved a request for consultation from " . $name . " about " . $service . ".\r\n\n";
    $content .= "Contact information:\r\n";
    $content .= "Email: " . $email . "\r\n";
    $content .= "Phone: " . $phone . "\r\n\n";
    if ($message) {
        $content .= "Included Message:\r\n";
        $content .= $message . "\r\n\n";
    }
    $content .= "Best,\r\n";
    
    $captcha = $_POST["captcha"];
    $secret = "";
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $secret . "&response=" . $captcha . "&remoteip=" . $_SERVER['REMOTE_ADDR']);
    
    if($response.success == true) {
        $sent = mail($to, $subject, $content, $headers);
    }
}
?>
