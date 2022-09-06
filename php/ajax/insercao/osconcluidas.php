<?php
    function adicionarOs($numero, $cpfcnpj, $nome, $serial, $descricao, $responsavel){
        $conn = new mysqli('us125-cp.valueserver.com.br','fortal_adm_garantias','{xwl&EGy]o(#','fortal_garantias', 3306);
        if($conn->connect_error){
            echo "$conn->connect_error";
            die("Connection Failed : ". $conn->connect_error);
        } else {
            $stmt = $conn->prepare("insert into osconcluidas(numero, cpfcnpj, nome, serie, descricao, responsavel) values(?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssss",$numero, $cpfcnpj, $nome, $serial, $descricao, $responsavel);
            $execval = $stmt->execute();
            echo $execval;
            echo "Registration successfully...";
            sleep(1);
            header("Location: https://fortalconnect.com.br/adm.html");
            $stmt->close();
            $conn->close();
        }
    }

    $cpfcnpj = $_POST["oscpfcnpj"];
    $nome = $_POST["osnome"];
    $serial = $_POST["osmaquina"];
    $descricao = $_POST["osdescricao"];
    $status = "Aguardando Aprovação";

    if (isset($serial) == true && empty($serial) == false){
        adicionarOs($cpfcnpj, $nome, $serial, $descricao, $status);
    } else {
        $serials = $_POST["osmaquinas"];
        adicionarOs($cpfcnpj, $nome, $serials, $descricao, $status);
    }
?>
