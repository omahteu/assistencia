export async function listarPlacas() {
    const raiz = window.location.host
    const dados = await fetch(`http://${raiz}/assistencia/php/ajax/leitura/placa.php`)
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        infos.forEach(e => {
            $("#select_placa").append('<option>' + e.placa + '</option>');
        });
    } else {
        console.log(resposta["msg"])
    }
}
