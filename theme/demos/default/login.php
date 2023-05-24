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

// Controllo se l'utente esiste nel database
$sql = "SELECT * FROM utente WHERE nome = '$name' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Login avvenuto con successo
    session_start(); // Avvia la sessione

    // Salva i dati dell'utente nella sessione
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $password;

    header("Location: home.php");
    exit();
} else {
    // Credenziali non valide
    echo '<script>alert("Credenziali non valide. Riprova."); window.history.back();</script>';
}

$conn->close();
?>
