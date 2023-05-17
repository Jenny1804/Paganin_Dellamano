<?php
require_once 'config.php';

$error = array();
$res = array();

if (empty($_POST['email'])) {
    $error[] = "Email field is required";
}

if (empty($_POST['password'])) {
    $error[] = "Password field is required";
}

if (!empty($_POST['email']) && !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $error[] = "Enter a valid email address";
}

if (count($error) > 0) {
    $resp['msg'] = $error;
    $resp['status'] = false;
    echo json_encode($resp);
    exit;
}

$statement = $db->prepare("SELECT * FROM users WHERE email = :email");
$statement->execute(array(':email' => $_POST['email']));
$row = $statement->fetch(PDO::FETCH_ASSOC);

if ($row) {
    if (password_verify($_POST['password'], $row['password'])) {
        session_start();
        $_SESSION['user_id'] = $row['user_id'];
        $resp['redirect'] = "dashboard.php";
        $resp['status'] = true;
        echo json_encode($resp);
        exit;
    } else {
        $error[] = "Invalid password";
    }
} else {
    $error[] = "Email does not exist";
}

$resp['msg'] = $error;
$resp['status'] = false;
echo json_encode($resp);
exit;
?>
