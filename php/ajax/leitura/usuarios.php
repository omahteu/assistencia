<?php 
    include "../conexao.php";
    header("Acesso-Controle-Permitir-Origem: *");
    $query = "SELECT id, nome, senha FROM usuarios";
    $resultado = $conn->query($query);
    if ($resultado->num_rows > 0) {
        while($row = $resultado->fetch_assoc()) {
            $dados[] = [
                'id' => $row["id"],
                'nome' => $row["nome"],
                'senha' => $row["senha"]
            ];
        }
        $retorna = ['status' => true, 'dados' => $dados];
    } else {
        $retorna = ['status' => false, 'msg' => "ERRO"];
    }
    echo json_encode($retorna);
?>