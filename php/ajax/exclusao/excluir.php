<?php
    function delete($tabela, $valor){
        include "../conexao.php";
        $sql = "DELETE FROM $tabela WHERE id = $valor";

        if ($conn->query($sql) === TRUE) {
            echo "Registration successfully...";
            sleep(1);
            header("Location: https://fortalconnect.com.br/adm.html");
            $stmt->close();
            $conn->close();
        } else {
            echo "Error deleting record: " . $conn->error;
        }

        $conn->close();
    };

    $categoria = $_POST["categoria"];

    if($categoria == "componentes"){
        $item = $_POST["xvalor"];
        $componente = $_POST["xcomponentes"];
        delete($componente, $item);
    } else {
        $item = $_POST["xvalor"];
        delete("infos", $item);
    }
?>
