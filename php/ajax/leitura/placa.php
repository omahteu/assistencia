<?php 
    include_once("conexao.php");
    $query = "SELECT id, placa FROM placa";
    $resultado = $conn->query($query);
    if ($resultado->num_rows > 0) {
        while($row = $resultado->fetch_assoc()) {
            $dados[] = [
                'id' => $row["id"],
                'placa' => $row["placa"]
            ];
        }
        $retorna = ['status' => true, 'dados' => $dados];
    } else {
        $retorna = ['status' => false, 'msg' => "ERRO"];
    }
    echo json_encode($retorna);
?>
