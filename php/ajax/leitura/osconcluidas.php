<?php 
    include "../conexao.php";
    $query = "SELECT id, numero, cpfcnpj, nome, serie, descricao, responsavel FROM osconcluidas";
    $resultado = $conn->query($query);
    if ($resultado->num_rows > 0) {
        while($row = $resultado->fetch_assoc()) {
            $dados[] = [
                'id' => $row["id"],
                'numero' => $row["numero"],
                'cpfcnpj' => $row["cpfcnpj"],
                'nome' => $row["nome"],
                'serie' => $row["serie"],
                'descricao' => $row["descricao"],
                'responsavel' => $row["responsavel"]
            ];
        }
        $retorna = ['status' => true, 'dados' => $dados];
    } else {
        $retorna = ['status' => false, 'msg' => "ERRO"];
    }
    echo json_encode($retorna);
?>