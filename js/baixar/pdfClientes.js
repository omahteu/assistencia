$().on("click", "#pdfClientes", function(){
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>OS Concluídas</h1>'+
        "<table border='1'>"+
            "<thead>"+
                "<tr>"+
                    "<th>CPF / CNPJ</th>"+
                    "<th>Nome</th>"+
                    "<th>Telefone</th>"+
                    "<th>Endereço</th>"+
                    "<th>Número</th>"+
                    "<th>Bairro</th>"+
                "</tr>"+
            "</thead>"
    )
    $.get("../php/ajax/leitura/osconcluidas.php", function(e){
        var infos = JSON.parse(e)
        var dados = infos["dados"]
        dados.forEach(el => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${el.numero}</td>`+
                        `<td>${el.cpfcnpj}</td>`+
                        `<td>${el.nome}</td>`+
                        `<td>${el.serie}</td>`+
                        `<td>${el.descricao}</td>`+
                        `<td>${el.responsavel}</td>`+
                    '</tr>'+
                `</tbody>`
            )
        });
    })
    janela.document.write("</body>")
    janela.document.write("</html>")
    setTimeout(() => {
        janela.print()
    }, 500);
})
