<?php 
    function dadosFiltrados($identificador){
        include "../conexao.php";
        $query = "SELECT id, cpfcnpj, nome, serie, descricao, estado FROM os where id='$identificador'";
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
            $retorna = $dados;
        } else {
            $retorna = ['status' => false, 'msg' => "ERRO"];
        }
        return $retorna;
    }
?>
