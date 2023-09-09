async function listarClientes() {
    const raiz = window.location.host
    const dados = await fetch(`http://${raiz}/assistencia/php/ajax/leitura/cliente.php`)
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        var tabela = document.getElementById("lista_clientes")
        tabela.innerHTML = ""
        infos.forEach(e => {
            tabela.innerHTML += '<tr>'+
                                    `<td>${e.cpfcnpj}</td>`+
                                    `<td>${e.nome}</td>`+
                                    `<td>${e.telefone}</td>`+
                                    `<td>${e.rua}</td>`+
                                    `<td>${e.numero}</td>`+
                                    `<td>${e.bairro}</td>`+
                                '</tr>'

        });
    } else {
        console.log(resposta["msg"])
    }
}

$(document).ready(function(){
    listarClientes()
})