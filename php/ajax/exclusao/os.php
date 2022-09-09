<?php
    function delete($valor){
        include "../conexao.php";

        $sql = "DELETE FROM os WHERE id = '$valor'";

        if ($conn->query($sql) === TRUE) {
            echo "Registration successfully...";
            sleep(1);
            header("Location: https://fortalconnect.com.br/os.html");
            $stmt->close();
            $conn->close();
        } else {
            echo "Error deleting record: " . $conn->error;
        }

        $conn->close();
    };

    function adicionarOsExcluidax($numero, $cpfcnpj, $nome, $serie, $descricao, $estado, $motivo){
        $conn = new mysqli('us125-cp.valueserver.com.br','fortal_adm_garantias','{xwl&EGy]o(#','fortal_garantias', 3306);
        if($conn->connect_error){
            echo "$conn->connect_error";
            die("Connection Failed : ". $conn->connect_error);
        } else {
            $stmt = $conn->prepare("insert into osexcluidas(numero, cpfcnpj, nome, serie, descricao, estado, motivo) values(?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("sssssss", $numero, $cpfcnpj, $nome, $serie, $descricao, $estado, $motivo);
            $execval = $stmt->execute();
            echo $execval;
            echo "Registration successfully...";
            sleep(1);
            $stmt->close();
            $conn->close();
        }
    }

    $identificador = $_POST["aidentificador"];
    $motivo = $_POST["osmotivo"];

    include "../leitura/osfiltro.php";
    
    $maina = dadosFiltrados($identificador);
    $numero = $maina[0]["id"];
    $cpfcnpj = $maina[0]["cpfcnpj"];
    $nome = $maina[0]["nome"];
    $serie = $maina[0]["serie"];
    $descricao = $maina[0]["descricao"];
    $estado = $maina[0]["estado"];

    adicionarOsExcluidax($numero, $cpfcnpj, $nome, $serie, $descricao, $estado, $motivo);

    sleep(2);

    delete($identificador)

?>
