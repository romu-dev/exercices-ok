<?php

session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Un Backoffice de portfolio développé à l'Acs de Dijon">
    <title>Backoffice Portfolio</title>
</head>
<body><?php
if ($_SESSION) {
    echo $_SESSION["message"];
    unset($_SESSION["message"]);
}
?>

    <form action="handler.php" method="post">
       
        <p>
            <label for="">Titre :</label>
            <input type="text" name="data-title">
        </p>
       
        <p>
            <label for="">Description :</label>
            <textarea name="data-description" id="" cols="30" rows="10"></textarea>
        </p>
       
        <p>
            <input type="submit" name="btn-submit" value="Envoyer">
        </p>
       

    </form>
</body>
</html>