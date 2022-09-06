export async function listarMemorias() {
    const dados = await fetch("https://fortalconnect.com.br/php/ajax/leitura/memoria.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        infos.forEach(e => {
            $("#select_memoria").append('<option>' + e.memoria + '</option>');
        });
    } else {
        console.log(resposta["msg"])
    }
}
