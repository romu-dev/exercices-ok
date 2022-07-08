<?php

session_start();

if (isset($_POST["data-title"]) && !empty($_POST["data-title"])
&& isset($_POST["data-description"]) && !empty($_POST["data-description"])) {
    $title = strip_tags( $_POST["data-title"]);
$description = strip_tags( $_POST["data-description"]);

require_once("db_connect.php");
$sql = "INSERT INTO tbl_projects (project_title, project_description) VALUES (:project_title, :project_description)";

$query = $db->prepare($sql);
$query->bindValue(':project_title', $title, PDO::PARAM_STR);
$query->bindValue(':project_description', $description, PDO::PARAM_STR);

$query->execute();

$_SESSION["message"] = "<p style='color: green'>Votre projet a bien été sauvegardé !</p>";
header("Location: index.php");
} else {
    $_SESSION["message"] = "<p style='color: red'>Votre projet n'a pas été sauvegardé !</p>";
    header("Location: index.php");

}

