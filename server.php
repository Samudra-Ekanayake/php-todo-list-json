<?php
$todoList = [
    [
        'id' => 1,
        'task' => 'Comprare il latte',
        'completed' => false,
    ],
    [
        'id' => 2,
        'task' => 'Fare una passeggiata',
        'completed' => true,
    ],
    [
        'id' => 3,
        'task' => 'Leggere un libro',
        'completed' => false,
    ],
    [
        'id' => 4,
        'task' => 'Scrivere un articolo',
        'completed' => false,
    ],
    [
        'id' => 5,
        'task' => 'Chiamare un amico',
        'completed' => true,
    ],
];

header('Content-Type: application/json');

$jsonString = json_encode($todoList);

?>
