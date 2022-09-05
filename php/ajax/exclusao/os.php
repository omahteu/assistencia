<?php
    function delete($tabela, $valor){
        include "../conexao.php";
        // sql to delete a record
        $sql = "DELETE FROM $tabela WHERE id = $valor";

        if ($conn->query($sql) === TRUE) {
            echo "Registration successfully...";
            sleep(1);
            header("Location: https://fortalconnect.com.br/adm.html");
            $stmt->close();
            $conn->close();
        } else {
            echo "Error deleting record: " . $conn->error;
        }

        $conn->close();
    };

    //include "../conexao.php";
    //include "../leitura/os.php"
    

    $identificador = $_POST["aidentificador"];
    $motivo = $_POST["osmotivo"];
  

    include "../leitura/osfiltro.php";
    include "../insercao/osexcluidas.php";

    
    $maina = dadosFiltrados("os", $identificador);
    $id = $maina[0]["id"];
    $cpfcnpj = $maina[0]["cpfcnpj"];
    $nome = $maina[0]["nome"];
    $serial = $maina[0]["serie"];
    $descricao = $maina[0]["descricao"];
    $status = $maina[0]["estado"];


    // adicionarOsExcluidas($numero, $cpfcnpj, $nome, $serial, $descricao, $status, $motivo);

    adicionarOsExcluidas($id, $cpfcnpj, $nome, $serial, $descricao, $status, $motivo);

    sleep(5);

    delete("os", $id)





    

?>