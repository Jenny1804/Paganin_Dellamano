<?php
    session_start(); // Avvia la sessione

    if (isset($_SESSION['email']) && isset($_SESSION['password'])) {
        // I dati dell'utente sono presenti nella sessione
        $email = $_SESSION['email'];
        $password = $_SESSION['password'];

        // Puoi utilizzare $email e $password come desiderato

        // Esempio di utilizzo
        header("Location: h");
    } else {
        // Utente non autenticato, reindirizzamento al login
        header("Location: login.php");
        exit();
    }
?>