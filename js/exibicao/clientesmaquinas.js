async function listarClientesMaquinas() {
    const dados = await fetch("https://fortalconnect.com.br/php/ajax/leitura/maquinas.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        var tabela = document.getElementById("lista_clientesmaquinas")
        tabela.innerHTML = ""
        infos.forEach(e => {
            tabela.innerHTML += '<tr>'+
                                    `<td>${e.cpfcnpj}</td>`+
                                    `<td>${e.serie}</td>`+
                                '</tr>'

        });
    } else {
        console.log(resposta["msg"])
    }
}

$(document).ready(function(){
    listarClientesMaquinas()
})