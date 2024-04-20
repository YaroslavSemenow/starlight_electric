<?php
$name = $_POST['name'];

$to = 'yaryk2013@gmail.com';
$subject = 'Нове повідомлення від ' . $name;
$body = 'From: ' . $name . "\r\n";
$mailSent = mail($to, $subject, $body);

if ($mailSent) {
    echo 'Повідомлення відправлено успішно';
} else {
    header("HTTP/1.1 500 Internal Server Error");
}
