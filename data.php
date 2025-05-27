<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = htmlspecialchars(trim($_POST["name"]));
    $email    = htmlspecialchars(trim($_POST["email"]));
    $message  = htmlspecialchars(trim($_POST["message"]));
    $datetime = date("Y-m-d H:i:s");

    $entry = "[$datetime] Ім'я: $name | Email: $email | Повідомлення: $message\n";

    file_put_contents("messages.txt", $entry, FILE_APPEND | LOCK_EX);

    echo "<h2>Повідомлення надіслано.</h2>";
} else {
    echo "<h2>Помилка відправки повідомлення.</h2>";
}
?>