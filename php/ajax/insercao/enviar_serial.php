<?php

    $comb = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $shfl = str_shuffle($comb);
    $serial = substr($shfl,0,12);
    $placa = $_POST["select_placa"];
    $processador = $_POST["select_processador"];
    $memoria = $_POST["select_memoria"];
    $hd = $_POST["select_hd"];
    $fonte = $_POST["select_fonte"];
    $data = $_POST["garantia"];
    $data_formatada = date('d/m/Y',  strtotime($data));


    $conn = new mysqli('us125-cp.valueserver.com.br','fortal_adm_garantias','{xwl&EGy]o(#','fortal_garantias', 3306);
        if($conn->connect_error){
            echo "$conn->connect_error";
            die("Connection Failed : ". $conn->connect_error);
        } else {
            $stmt = $conn->prepare("insert into infos(serie, placa, processador, memoria, hd, fonte, garantia) values(?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("sssssss", $serial, $placa, $processador, $memoria, $hd, $fonte, $data_formatada);
            $execval = $stmt->execute();
            echo $execval;
            echo "Registration successfully...";
            sleep(2);
            header("Location: https://fortalconnect.com.br/cadastro.html");
            $stmt->close();
            $conn->close();
        }
?> 
