<?php
require 'PHPMailerAutoload.php';
$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	echo "<span class=\"error\">Error al validar el E-mail</span>";
	exit();
}
$mail = new PHPMailer;
$mail->isSMTP();
$mail->CharSet = 'UTF-8';
$mail->Host = 'smtp.live.com';
$mail->SMTPAuth = true;
$mail->Username = 'user@example.com';
$mail->Password = 'secret';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;
$mail->setFrom('noreply@dirnovo.com', 'Clicnovo Mailer');
$mail->addAddress('joe@example.net', 'Joe User');
$mail->addAddress('info@tecni-freezer.com');
$mail->addReplyTo($email, $nombre);
$mail->addReplyTo($email, $nombre);

$mail->isHTML(true);

$mail->Subject = "Formulario: " . $asunto;
$mail->Body = $mensaje;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>