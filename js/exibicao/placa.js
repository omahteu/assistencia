export async function listarPlacas() {
    const dados = await fetch("../php/ajax/leitura/placa.php");
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
