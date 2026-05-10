<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../index.html");
    exit;
}

$first_name = trim($_POST["first_name"] ?? "");
$last_name  = trim($_POST["last_name"] ?? "");
$email      = trim($_POST["email"] ?? "");
$phone      = trim($_POST["phone"] ?? "");
$message    = trim($_POST["message"] ?? "");

if (
    empty($first_name) ||
    empty($last_name) ||
    empty($email) ||
    empty($phone) ||
    empty($message)
) {
    echo "Please fill out all required fields.";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Please enter a valid email address.";
    exit;
}

// Change this to the email address where you want messages sent.
$to = "chase.a.toy@gmail.com";

$subject = "New Contact Form Message from CoBay Auto Website";

$body = "You received a new message from the CoBay Auto website:\n\n";
$body .= "First Name: " . $first_name . "\n";
$body .= "Last Name: " . $last_name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Phone: " . $phone . "\n\n";
$body .= "Message:\n" . $message . "\n";

$headers = "From: CoBay Auto Website <no-reply@cobayauto.com>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

if (mail($to, $subject, $body, $headers)) {
    header("Location: ../index.html?message=success#contact");
    exit;
} else {
    echo "Sorry, your message could not be sent. Please try again later.";
}
?>