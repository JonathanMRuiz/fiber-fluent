<?php
// Solo aceptar solicitudes POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener los datos enviados desde el formulario React
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data["name"] ?? '';
    $email = $data["email"] ?? '';
    $message = $data["message"] ?? '';

    // Dirección de destino (tu correo del dominio)
    $to = "pmerlo@fiberfluent.com"; // <-- Cambiá esto por tu correo

    // Asunto del correo
    $subject = "Nuevo mensaje de contacto desde la web";

    // Contenido del correo
    $body = "Nombre: $name\n";
    $body .= "Email: $email\n";
    $body .= "Mensaje:\n$message\n";

    // Cabeceras
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "No se pudo enviar el correo."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Método no permitido."]);
}