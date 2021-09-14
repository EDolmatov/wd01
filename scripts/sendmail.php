<?php
  require 'PHPMailer/PHPMailerAutoload.php';

  $emailMessage = "<table style='width:100%'>
    <tr>
      <td style='padding:15px; width:100%'>Имя клиента: " . $_POST['name'] . "</td>
    </tr>
    <tr>
    <td style='padding:15px; width:100%'>Номер телефона: " . $_POST['phone'] . "</td>
    </tr>
  </table>";

  $mail = new PHPMailer();
  $mail->CharSet = "UTF-8";

  $mail->setFrom('adm@'.$_SERVER['HTTP_HOST'], 'Mailer');
  $mail->addAddress('edolmatov20@gmail.com');

  $mail->isHTML(true); 
  $mail->Subject = "Запрос от клиента";
  $mail->Body = $emailMessage;
  
  if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
  } else {
    echo 'Message has been sent';
  }
?>