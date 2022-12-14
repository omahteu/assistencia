export async function listarOs() {
    const dados = await fetch("https://fortalconnect.com.br/php/ajax/leitura/os.php");
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
                                        `<button type="button" name="${e.id}" class="btn btn-warning" id="osalterar">Alterar</button>`+
                                        `<button type="button" name="${e.id}" class="btn btn-danger" id="osexcluir">Excluir</button>`+
                                    `</td>`+
                                '</tr>'

        });
    } else {
        console.log(resposta["msg"])
    }
}
