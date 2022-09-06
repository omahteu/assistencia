<?php
    function insert($tabela, $valor){
        $conn = new mysqli('us125-cp.valueserver.com.br','fortal_adm_garantias','{xwl&EGy]o(#','fortal_garantias', 3306);
        if($conn->connect_error){
            echo "$conn->connect_error";
            die("Connection Failed : ". $conn->connect_error);
        } else {
            $stmt = $conn->prepare("insert into $tabela($tabela) values(?)");
            $stmt->bind_param("s", $valor);
            $execval = $stmt->execute();
            echo $execval;
            echo "Registration successfully...";
            sleep(1);
            header("Location: https://fortalconnect.com.br/cadastro.html");
            $stmt->close();
            $conn->close();
        }
    }
    $componentes = $_POST["icomponentes"];
    $valor_componente = $_POST[$componentes];
    if ($componentes == "placa"){
        insert($componentes, $valor_componente);
    } elseif ($componentes == "processador"){
        insert($componentes, $valor_componente);
    } elseif ($componentes == "memoria"){
        insert($componentes, $valor_componente);
    } elseif ($componentes == "hd"){
        insert($componentes, $valor_componente);
    } elseif ($componentes == "fonte"){
        insert($componentes, $valor_componente);
    }
?>
