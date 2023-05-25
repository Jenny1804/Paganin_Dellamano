<?php
// Connessione al database
$servername = "localhost";
$username = "root";
$password = "admin";
$dbname = "ac_milan";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

// Recupero dei dati inviati dal form di login
$name = $_POST['name'];
$password = $_POST['password'];

// Controllo dei campi vuoti
if (empty($name)) {
    $errorMessage .= "Campo Nome necessario. ";
}

if (empty($password)) {
    $errorMessage .= "Campo Password necessario. ";
}

// Controllo se sono stati trovati errori
if (!empty($errorMessage)) {
    echo '<script>alert("' . $errorMessage . '"); window.history.back();</script>';
} else {
    // Controllo se l'utente esiste nel database
    $sql = "SELECT * FROM utente WHERE nome = '$name'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $hashedPassword = $row['password'];
        if (password_verify($password, $hashedPassword)) {
            // Login avvenuto con successo
            session_start(); // Avvia la sessione

            // Salva i dati dell'utente nella sessione
            $_SESSION['name'] = $name;
            $_SESSION['password'] = $password;

            header("Location: ../../../demos/default/home.html");
            exit();
        } else {
            // Credenziali non valide
            echo '<script>alert("Password non valida. Riprova."); window.history.back();</script>';
        }
    } else {
        // Credenziali non valide
        echo '<script>alert("Credenziali non valide. Riprova."); window.history.back();</script>';
    }

    $conn->close();
}
?>