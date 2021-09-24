<?php 
$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];

require_once 'phpmailer/PHPMailerAutoload.php';

try {
  $mail = new PHPMailer;
  $mail->CharSet = 'utf-8';
  $mail->isSMTP();
  $mail->Host = 'ssl://smtp.yandex.ru';
  $mail->SMTPAuth = true;
  $mail->SMTPDebug = 0; //1 or 2 or 3
  $mail->Username = 'EalyenenPost';
  $mail->Password = 'Post2408';
  $mail->Port = 465;
  $mail->SMTPSecure = 'ssl';
  $mail->setFrom('EalyenenPost@yandex.ru', 'Pulse');
  $mail->addAddress($email);
  $mail->isHTML(true);
  $mail->Subject = 'Данные';
  $mail->Body    = 'Пользователь оставил данные <br> Имя: ' . $name . ' <br>Номер телефона: ' . $phone . '<br> E-mail: ' . $email . '';
  $mail->send();
  // echo 'Message has been sent';
  return true;
} catch (Exception $e) {
  // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  return false;
}
?>