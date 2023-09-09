export async function listarMemorias() {
    const raiz = window.location.host
    const dados = await fetch(`http://${raiz}/assistencia/php/ajax/leitura/memoria.php`)
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
