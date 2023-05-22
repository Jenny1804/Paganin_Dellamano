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

$sql = "SELECT nome, descrizione, quantita, img, prezzo FROM prodotto";

//INVIO QUERY AL DATABASE
$stmt = $conn->query($sql);

// Creazione di un array con i dati estratti dalla query
$prodotti = array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $prodotto = array(
        'nome' => $row["nome"],
        'descrizione' => $row["descrizione"],
        'quantita' => $row["quantita"],
        'img' => $row["img"],
        'prezzo' => $row["prezzo"]
    );
    array_push($prodotti, $prodotto);
}

// Codifica l'array dei prodotti in formato JSON
$json_data = json_encode($prodotti);

// Restituisci il JSON come risposta
echo $json_data;
?>
