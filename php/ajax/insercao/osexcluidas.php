<?php
    function adicionarOsExcluidas($numero, $cpfcnpj, $nome, $serie, $descricao, $estado, $motivo){
        $conn = new mysqli('us125-cp.valueserver.com.br','fortal_adm_garantias','{xwl&EGy]o(#','fortal_garantias', 3306);
        if($conn->connect_error){
            echo "$conn->connect_error";
            die("Connection Failed : ". $conn->connect_error);
        } else {
            $stmt = $conn->prepare("insert into osexcluidas(numero, cpfcnpj, nome, serie, descricao, estado, motivo) values(?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("sssssss",$numero, $cpfcnpj, $nome, $serie, $descricao, $estado, $motivo);
            $execval = $stmt->execute();
            sleep(2);
            $stmt->close();
            $conn->close();
        }
    }
?>
