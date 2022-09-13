$(document).on("click", "#pdfExcluidas", function(){
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>OS Excluídas</h1>'+
        "<table border='1'>"+
            "<thead>"+
                "<tr>"+
                    "<th>Número</th>"+
                    "<th>CPF / CNPJ</th>"+
                    "<th>Nome</th>"+
                    "<th>Serial</th>"+
                    "<th>Descrição</th>"+
                    "<th>Status</th>"+
                    "<th>Motivo</th>"+
                "</tr>"+
            "</thead>"
    )
    $.get("../php/ajax/leitura/osexcluidas.php", function(e){
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
                        `<td>${el.estado}</td>`+
                        `<td>${el.motivo}</td>`+
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
