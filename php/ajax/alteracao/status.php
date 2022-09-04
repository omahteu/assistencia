<?php


    function alterar($estado, $id){
        $conn = new mysqli('us125-cp.valueserver.com.br','fortal_adm_garantias','{xwl&EGy]o(#','fortal_garantias', 3306);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    
        $sql = "UPDATE os SET estado='$estado' WHERE id='$id'";
    
        if ($conn->query($sql) === TRUE) {
            echo "Record updated successfully";
        } else {
            echo "Error updating record: " . $conn->error;
        }
        sleep(2);
        header("Location: https://fortalconnect.com.br/adm.html");
        $conn->close();
    }

    $novoEstado = $_POST["novoestado"];
    $numero = $_POST["nserie"];

    if ($novoEstado == "aguardando"){
        alterar("Aguardando Aprovação", $numero);
    } else if ($novoEstado == "aprovado"){
        alterar("Orçamento Aprovado", $numero);
    } else if ($novoEstado == "analise"){
        alterar("Em Análise", $numero);
    } else if ($novoEstado == "manutencao"){
        alterar("Em Manutenção", $numero);
    } else if ($novoEstado == "finalizado"){
        alterar("Finalizado", $numero);
    }

?>