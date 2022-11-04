<?php
    $cpfcnpj = $_POST["cpfcnpj"];
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $endereco = $_POST["endereco"];
    $numero = $_POST["numero"];
    $bairro = $_POST["bairro"];

    $conn = new mysqli('us125-cp.valueserver.com.br','fortal_adm_garantias','{xwl&EGy]o(#','fortal_garantias', 3306);
<<<<<<< HEAD
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : ". $conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into clientes(cpfcnpj, nome, telefone, endereco) values(?, ?, ?, ?)");
        $stmt->bind_param("ssss", $cpfcnpj, $nome, $telefone, $endereco);
        $execval = $stmt->execute();
        echo $execval;
        echo "Registration successfully...";
        sleep(2);
        header("Location: https://fortalconnect.com.br/cadastro.html");
        $stmt->close();
        $conn->close();
    }
=======
        if($conn->connect_error){
            echo "$conn->connect_error";
            die("Connection Failed : ". $conn->connect_error);
        } else {
            $stmt = $conn->prepare("insert into clientes(cpfcnpj, nome, telefone, rua, numero, bairro) values(?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssss", $cpfcnpj, $nome, $telefone, $endereco, $numero, $bairro);
            $execval = $stmt->execute();
            echo $execval;
            echo "Registration successfully...";
            sleep(2);
            header("Location: https://fortalconnect.com.br/cadastro.html");
            $stmt->close();
            $conn->close();
        }
>>>>>>> c9a351be4fb70e6bea9d80da046c00f2929f06ea
?> 
