<?php
require_once 'config.php';

// Recupero dei dati inviati dal form di registrazione
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Verifica se l'utente esiste già
$checkQuery = "SELECT * FROM utenti WHERE username = '$username' OR email = '$email'";
$checkResult = $db->query($checkQuery);
if ($checkResult->rowCount() > 0) {
    // L'utente esiste già, restituisci una risposta "exists"
    echo "exists";
} else {
    // L'utente non esiste, esegui la query di inserimento dei dati
    $insertQuery = "INSERT INTO utenti (username, email, password) VALUES (:username, :email, :password)";
    $statement = $db->prepare($insertQuery);
    $statement->bindParam(':username', $username);
    $statement->bindParam(':email', $email);
    $statement->bindParam(':password', $password);
    if ($statement->execute()) {
        // Inserimento riuscito, restituisci una risposta "success"
        echo "success";
    } else {
        // Errore durante l'inserimento, restituisci una risposta "failed"
        echo "failed";
    }
}
?>
