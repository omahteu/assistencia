<?php
    $cpfcnpj = $_POST["cpfcnpj"];
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $endereco = $_POST["endereco"];
    $serial = $_POST["listaSerial"];

    $conn = new mysqli('us125-cp.valueserver.com.br','fortal_adm_garantias','{xwl&EGy]o(#','fortal_garantias', 3306);
        if($conn->connect_error){
            echo "$conn->connect_error";
            die("Connection Failed : ". $conn->connect_error);
        } else {
            $stmt = $conn->prepare("insert into clientes(cpfcnpj, nome, telefone, endereco, serial) values(?, ?, ?, ?, ?)");
            $stmt->bind_param("sssss", $cpfcnpj, $nome, $telefone, $endereco, $serial);
            $execval = $stmt->execute();
            echo $execval;
            echo "Registration successfully...";
            sleep(2);
            header("Location: https://fortalconnect.com.br/adm.html");
            $stmt->close();
            $conn->close();
        }
?> 
