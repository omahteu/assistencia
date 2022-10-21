$(document).on("click", "#excelClientes", function(e){
    e.preventDefault()
    var divTabela = document.getElementById("tab_clientes")
    var dados = new Blob(['\ufeff' + divTabela.outerHTML], {type:'application/vnd.ms-excel'})
    var url = window.URL.createObjectURL(dados)
    var a = document.createElement('a')
    a.href = url
    a.download = "relatorio"
    a.click()
})
