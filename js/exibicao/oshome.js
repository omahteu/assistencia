async function listarOs() {
    const dados = await fetch("../php/ajax/leitura/os.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        var registro = infos.filter(el => el.estado != "Finalizado")
        var tabela = document.getElementById("osemandamentohome")
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

async function listarOsFiltro(estado) {
    const dados = await fetch("../php/ajax/leitura/os.php");
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        var registro = infos.filter(el => el.estado == estado)
        var tabela = document.getElementById("osemandamentohome")
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

$(document).ready(function(){
    listarOs()
})

$("#filtrOs").change(function(){
    var item = $(this).val()
    if (item == "aguardando"){
        listarOsFiltro("Aguardando Aprovação");
    } else if (item == "aprovado"){
        listarOsFiltro("Orçamento Aprovado");
    } else if (item == "analise"){
        listarOsFiltro("Em Análise");
    } else if (item == "manutencao"){
        listarOsFiltro("Em Manutenção");
    } else if(item == "todos"){
        listarOs()
    }
})
