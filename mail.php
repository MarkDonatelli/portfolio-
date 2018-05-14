<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['message'];
$type = $_POST['type'];
$message = $_POST['message'];
$formcontent=" From: $name \n Email: $email \n Message: $message";
$recipient = "MARKWDONATELLI@YAHOO.COM";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='index.html' style='text-decoration:none;color:#174D73;'> Return To MarkwDonatelli.com</a>";
?>
