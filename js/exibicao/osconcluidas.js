async function listarOsConcluidas() {
    const raiz = window.location.host
    const dados = await fetch(`http://${raiz}/assistencia/php/ajax/leitura/osconcluidas.php`)
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        var tabela = document.getElementById("osconcluidas")
        tabela.innerHTML = ""
        infos.forEach(e => {
            tabela.innerHTML += '<tr>'+
                                    `<td>${e.numero}</td>`+
                                    `<td>${e.cpfcnpj}</td>`+
                                    `<td>${e.nome}</td>`+
                                    `<td>${e.serie}</td>`+
                                    `<td>${e.descricao}</td>`+
                                    `<td>${e.responsavel}</td>`+
                                '</tr>'

        });
    } else {
        console.log(resposta["msg"])
    }
}

$(document).ready(function(){
    listarOsConcluidas()
})