$("#peIgsx").click(function(e){
    e.preventDefault()
    var divTabela = document.getElementById("ig")
    var dados = new Blob(['\ufeff' + divTabela.outerHTML], {type:'application/vnd.ms-excel'})
    var url = window.URL.createObjectURL(dados)
    var a = document.createElement('a')
    a.href = url
    a.download = "relatorioIgs"
    a.click()
})