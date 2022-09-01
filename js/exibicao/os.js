export async function listarOs() {
    const dados = await fetch("../php/ajax/leitura/os.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        var tabela = document.getElementById("osemandamento")
        tabela.innerHTML = ""
        infos.forEach(e => {
            tabela.innerHTML += '<tr>'+
                                    `<td>${e.id}</td>`+
                                    `<td>${e.cpfcnpj}</td>`+
                                    `<td>${e.nome}</td>`+
                                    `<td>${e.serie}</td>`+
                                    `<td>${e.descricao}</td>`+
                                    `<td>${e.estado}</td>`+
                                    `<td>`+
                                        `<button type="button" class="btn btn-warning">Alterar</button>`+
                                        `<button type="button" class="btn btn-danger">Excluir</button>`+
                                    `</td>`+
                                '</tr>'

        });
    } else {
        console.log(resposta["msg"])
    }
}