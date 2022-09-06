export async function listarFontes() {
    const dados = await fetch("https://fortalconnect.com.br/php/ajax/leitura/fonte.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        infos.forEach(e => {
            $("#select_fonte").append('<option>' + e.fonte + '</option>');
        });
    } else {
        console.log(resposta["msg"])
    }
}
