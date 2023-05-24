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

// Recupero dei dati inviati dal form di registrazione
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Inizializza la variabile per gli eventuali messaggi di errore
$errorMessage = '';

// Controllo dei campi vuoti
if (empty($name)) {
    $errorMessage .= "Campo Nome necessario. ";
}

if (empty($email)) {
    $errorMessage .= "Campo Email necessario. ";
}

if (empty($password)) {
    $errorMessage .= "Campo Password necessario. ";
}

// Controllo se sono stati trovati errori
if (!empty($errorMessage)) {
    echo '<script>alert("' . $errorMessage . '"); window.history.back();</script>';
} else {
    // Controllo se l'utente esiste già nel database
    $sql = "SELECT * FROM utente WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // L'utente esiste già
        echo '<script>alert("L\'utente con questa email esiste già."); window.history.back();</script>';
    } else {
        // L'utente non esiste, esegui l'inserimento nel database
        $sql = "INSERT INTO utente (nome, email, password) VALUES ('$name', '$email', '$password')";
        
        if ($conn->query($sql) === TRUE) {
            header("Location: home.html");
            exit();
        } else {
            echo '<script>alert("Errore durante la registrazione: ' . $conn->error . '"); window.history.back();</script>';
        }
    }
}

$conn->close();
?>
