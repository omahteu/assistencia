<?php 
    include_once("conexao.php");
    $query = "SELECT id, cpfcnpj, nome, serie, descricao, estado FROM os";
    $resultado = $conn->query($query);
    if ($resultado->num_rows > 0) {
        while($row = $resultado->fetch_assoc()) {
            $dados[] = [
                'id' => $row["id"],
                'cpfcnpj' => $row["cpfcnpj"],
                'nome' => $row["nome"],
                'serie' => $row["serie"],
                'descricao' => $row["descricao"],
                'estado' => $row["estado"]
            ];
        }
        $retorna = ['status' => true, 'dados' => $dados];
    } else {
        $retorna = ['status' => false, 'msg' => "ERRO"];
    }
    echo json_encode($retorna);
?>
