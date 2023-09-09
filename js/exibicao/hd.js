export async function listarHds() {
    const raiz = window.location.host
    const dados = await fetch(`http://${raiz}/assistencia/php/ajax/leitura/hd.php`)
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        infos.forEach(e => {
            $("#select_hd").append('<option>' + e.hd + '</option>');
        });
    } else {
        console.log(resposta["msg"])
    }
}
