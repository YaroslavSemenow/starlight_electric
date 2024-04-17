<?php
$name = $_POST['name'];
// $email = $_POST['email'];
// $message = $_POST['message'];

$to = 'yaryk2013@gmail.com'; // Змініть на свою електронну адресу
$subject = 'Нове повідомлення від ' . $name;
$body = 'From: ' . $name . "\r\n";
// $body .= 'Email: ' . $email . "\r\n";
// $body .= 'Message: ' . $message;
$mail_sent = mail($to, $subject, $body);

if ($mail_sent) {
    echo 'Повідомлення відправлено успішно';
} else {
    header("HTTP/1.1 500 Internal Server Error");
}
?>
