export async function listarClientes() {
    const dados = await fetch("https://fortalconnect.com.br/php/ajax/leitura/cliente.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        infos.forEach(e => {
            $("#select_cpfcnpj").append('<option>' + e.cpfcnpj + '</option>');
        });
    } else {
        console.log(resposta["msg"])
    }
}
