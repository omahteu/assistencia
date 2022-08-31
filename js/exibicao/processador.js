export async function listarProcessadores() {
    const dados = await fetch("../php/ajax/leitura/processador.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        infos.forEach(e => {
            $("#select_processador").append('<option>' + e.processador + '</option>');
        });
    } else {
        console.log(resposta["msg"])
    }
}
