<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
    $serverName = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ac milan";
    
    try {
        $conn = new PDO("mysql:host=$serverName;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        echo "Connessione al database fallita: " . $e->getMessage();
        die();
    }

    $sql = "SELECT Titolo, Descrizione, NumPezzi, Img, Prezzo FROM prodotti";

    //INVIO QUERY AL DATABASE
    $stmt = $conn->query($sql);

    // Creazione di un array con i dati estratti dalla query
    $titoli = array();
    $descrizioni = array();
    $pezzi = array();
    $img = array();
    $prezzi = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        array_push($titoli, $row["Titolo"]);
        array_push($descrizioni, $row["Descrizione"]);
        array_push($pezzi, $row["NumPezzi"]);
        array_push($img, $row["Img"]);
        array_push($prezzi, $row["Prezzo"]);
    }
?>