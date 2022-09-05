<?php
    function adicionarOsExcluidas($numero, $cpfcnpj, $nome, $serial, $descricao, $status, $motivo){
        $conn = new mysqli('us125-cp.valueserver.com.br','fortal_adm_garantias','{xwl&EGy]o(#','fortal_garantias', 3306);
        if($conn->connect_error){
            echo "$conn->connect_error";
            die("Connection Failed : ". $conn->connect_error);
        } else {
            $stmt = $conn->prepare("insert into osexcluidas(numero, cpfcnpj, nome, serie, descricao, estado, motivo) values(?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("sssssss",$numero, $cpfcnpj, $nome, $serial, $descricao, $status, $motivo);
            $execval = $stmt->execute();
            echo $execval;
            $stmt->close();
            $conn->close();
        }
    }
?>
