<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $questions = $_POST['questions'];
   
    $to = "yaryk2013@gmail.com";

    $subject = "Нове повідомлення з форми зворотного зв'язку";

  
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

    $body = "<p><b>Name:</b> $name</p>";
    $body .= "<p><b>Email:</b> $email</p>";
    $body .= "<p><b>Questions:</b><br>$questions</p>";

    // Відправляємо електронний лист
    if (mail($to, $subject, $body, $headers)) {
        echo "Повідомлення успішно відправлено!";
    } else {
        echo "Помилка під час відправлення повідомлення.";
    }
}
?>
