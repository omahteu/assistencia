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
            header("Location: https://fortalconnect.com.br/os.html");
            $stmt->close();
            $conn->close();
        }
    }

    include "../leitura/osfiltro.php";

    $identificador = $_POST["nserie"];
    $responsavel = $_POST["responsavel"];

    $dados = dadosFiltrados($identificador);

    $numero = $dados[0]["id"];
    $cpfcnpj = $dados[0]["cpfcnpj"];
    $nome = $dados[0]["nome"];
    $serie = $dados[0]["serie"];
    $descricao = $dados[0]["descricao"];

    adicionarOs($numero, $cpfcnpj, $nome, $serie, $descricao, $responsavel)

?>
