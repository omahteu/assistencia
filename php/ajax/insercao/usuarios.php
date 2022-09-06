<?php
    include "../conexao.php";

    $sql = "INSERT INTO usuarios (nome, senha)
    VALUES ('fortal', 'Tiadm123@')";

    if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>