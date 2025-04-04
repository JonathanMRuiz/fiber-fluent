<?php
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!isset($data['name'], $data['email'], $data['message'])) {
        echo json_encode(["success" => false, "message" => "Todos los campos son requeridos."]);
        exit;
    }
    
    $name = htmlspecialchars($data['name']);
    $email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($data['message']);
    
    if (!$email) {
        echo json_encode(["success" => false, "message" => "Correo electrónico no válido."]);
        exit;
    }
    
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.office365.com';
        $mail->SMTPAuth = true;
        $mail->Username = getenv('SMTP_USER');
        $mail->Password = getenv('SMTP_PASS');
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        
        $mail->setFrom(getenv('SMTP_USER'), 'Formulario Web');
        $mail->addAddress(getenv('RECEIVER_EMAIL'));
        $mail->addReplyTo($email, $name);
        
        $mail->Subject = "Mensaje de $name desde el sitio web";
        $mail->Body = "Nombre: $name\nEmail: $email\n\nMensaje:\n$message";
        
        $mail->send();
        echo json_encode(["success" => true, "message" => "Mensaje enviado con éxito."]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Hubo un error al enviar el correo.", "error" => $mail->ErrorInfo]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
}