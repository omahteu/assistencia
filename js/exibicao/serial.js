export async function listarSeriais() {
    const dados = await fetch("https://fortalconnect.com.br/php/ajax/leitura/serial.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        infos.forEach(e => {
            $("#listaSerial").append('<option>' + e.serie + '</option>');
            $("#select_serial").append('<option>' + e.serie + '</option>');
        });
    } else {
        console.log(resposta["msg"])
    }
}