<?php
if ($_POST["name"]) {
    // Meta
    $to = base_convert("1757772843832", 10, 36);
    $to .= "@airtci.com";
    $subject = "Message from airtci.com";
    $headers = "From: contact@airtci.com";
    
    // Sanitize form fields
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $service = filter_input(INPUT_POST, 'service', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    // Build email content
    $content = "Hello,\r\n\n";
    $content .= "You have recieved a message from " . $name . " about " . $service . ".\r\n\n";
    $content .= "Contact information:\r\n";
    $content .= "Email: " . $email . "\r\n";
    if ($phone) {
        $content .= "Phone: " . $phone . "\r\n\n";
    }
    if ($message) {
        $content .= "Included Message:\r\n";
        $content .= $message . "\r\n\n";
    }
    $content .= "Best,\r\n";
    
    // Captcha
    $captcha = $_POST["captcha"];
    $secret = "";
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $secret . "&response=" . $captcha . "&remoteip=" . $_SERVER['REMOTE_ADDR']);
    
    // If the captcha response is successful, send the email
    if($response.success == true) {
        $sent = mail($to, $subject, $content, $headers);
    }
}
?>