export async function listarHds() {
    const dados = await fetch("https://fortalconnect.com.br/php/ajax/leitura/hd.php");
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
