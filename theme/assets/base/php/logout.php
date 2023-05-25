<?php
session_start();

// Elimina tutte le variabili di sessione
$_SESSION = array();

// Distruggi la sessione
session_destroy();

// Reindirizza alla pagina di login o a un'altra pagina desiderata
header("Location: ../../../demos/default/login.html");
exit();
?>
