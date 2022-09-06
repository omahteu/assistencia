<?php
    $cpfcnpj = $_POST["select_cpfcnpj"];
    $serial = $_POST["select_serial"];

    $conn = new mysqli('us125-cp.valueserver.com.br','fortal_adm_garantias','{xwl&EGy]o(#','fortal_garantias', 3306);
        if($conn->connect_error){
            echo "$conn->connect_error";
            die("Connection Failed : ". $conn->connect_error);
        } else {
            $stmt = $conn->prepare("insert into maquinas(cpfcnpj, serie) values(?, ?)");
            $stmt->bind_param("ss", $cpfcnpj, $serial);
            $execval = $stmt->execute();
            echo $execval;
            echo "Registration successfully...";
            sleep(2);
            header("Location: https://fortalconnect.com.br/cadastro.html");
            $stmt->close();
            $conn->close();
        }
?> 