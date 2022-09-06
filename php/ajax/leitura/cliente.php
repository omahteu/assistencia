<?php 
    include "../conexao.php";
    $query = "SELECT id, cpfcnpj, nome FROM clientes";
    $resultado = $conn->query($query);
    if ($resultado->num_rows > 0) {
        while($row = $resultado->fetch_assoc()) {
            $dados[] = [
                'id' => $row["id"],
                'cpfcnpj' => $row["cpfcnpj"],
                'nome' => $row["nome"]
            ];
        }
        $retorna = ['status' => true, 'dados' => $dados];
    } else {
        $retorna = ['status' => false, 'msg' => "ERRO"];
    }
    echo json_encode($retorna);
?>
