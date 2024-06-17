<?php

if(isset($_POST["id"]) && isset($_POST["task"])) {

    $fileContent = file_get_contents("dati.json");

    $todoList = json_decode($fileContent, true);

    $newTask =[
    "id" => $_POST["id"],
    "task" => $_POST["task"]
    ];

    $todoList = $newTask; 

    $todoListJson = json_encode($todoList);

    file_put_contents("dati.json", $todoListJson); 


};

$fileContent = file_get_contents("dati.json");

echo $fileContent;  

header('Content-Type: application/json');

/* echo json_encode($todoList); */
