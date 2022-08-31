<?php
    $placa = $_POST["placa"];
    $processador = $_POST["processador"];
    $memoria = $_POST["memoria"];
    $hd = $_POST["hd"];
    $fonte = $_POST["fonte"];
    $garantia = $_POST["garantia"];

    $conn = new mysqli('us125-cp.valueserver.com.br','fortal_adm_garantias','{xwl&EGy]o(#','fortal_garantias', 3306);
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into garantias(placa, processador, memoria, hd, fonte, data) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssss", $placa, $processador, $memoria, $hd, $fonte, $garantia);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		sleep(5);
		header("Location: https://fortalconnect.com.br/adm.html");
		$stmt->close();
		$conn->close();
	}
?>
