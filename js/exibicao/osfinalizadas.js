export async function listarOsAbertas() {
    const dados = await fetch("../php/ajax/leitura/os.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        var registro = infos.filter(el => el.estado == "Finalizado")
        console.log(registro)
        var tabela = document.getElementById("osemandamento")
        tabela.innerHTML = ""
        registro.forEach(e => {
            tabela.innerHTML += '<tr>'+
                                    `<td>${e.id}</td>`+
                                    `<td>${e.cpfcnpj}</td>`+
                                    `<td>${e.nome}</td>`+
                                    `<td>${e.serie}</td>`+
                                    `<td>${e.descricao}</td>`+
                                    `<td>${e.estado}</td>`+
                                '</tr>'

        });
    } else {
        console.log(resposta["msg"])
    }
}
