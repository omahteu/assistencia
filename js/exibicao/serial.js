export async function listarSeriais() {
    const dados = await fetch("../php/ajax/leitura/serial.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        infos.forEach(e => {
            $("#listaSerial").append('<option>' + e.serie + '</option>');
        });
    } else {
        console.log(resposta["msg"])
    }
}