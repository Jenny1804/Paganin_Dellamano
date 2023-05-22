<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$serverName = "localhost";
$username = "root";
$password = "admin";
$dbname = "ac_milan";

try {
    $conn = new PDO("mysql:host=$serverName;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connessione al database fallita: " . $e->getMessage();
    die();
}

// Recupera l'ID del prodotto dalla richiesta POST
$prodottoN = $_POST['NOME'];

$sql = "UPDATE prodotto SET quantita = quantita - 1 WHERE nome = '$prodottoN'";

if ($conn->query($sql) === TRUE) {
    echo "Quantità del prodotto aggiornata con successo";
} else {
    echo "Errore nell'aggiornamento della quantità del prodotto: " . $conn->error;
}

$conn->close();
?>
