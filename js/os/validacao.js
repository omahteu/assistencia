async function valida_cpf(cpf) {
    const dados = await fetch("../php/ajax/leitura/cliente.php");
    const resposta = await dados.json();
    const dadosMaquinas = await fetch("../php/ajax/leitura/maquinas.php")
    const respostadadosMaquinas = await dadosMaquinas.json()
    if (resposta['status'] == true && respostadadosMaquinas["status"] == true) {
        var infos = resposta["dados"]
        var infos2 = respostadadosMaquinas["dados"]
        var data = infos.filter(serial => serial.cpfcnpj == cpf)
        var data2 = infos2.filter(serial => serial.cpfcnpj == cpf)
        var osform = document.forms.namedItem("osform")
        if (infos2.length == 0) {
            $("#x1").remove()
            $("#x2").remove()
            $("#y1").remove()
            $("#y2").remove()
            alert("Usuário não possui maquinas")
        } else if (infos2.length == 1) {
            $("#y1").remove()
            $("#y2").remove()
            $(osform).prepend(
                '<div class="control-group" id="x1">' +
                    '<div class="controls">' +
                        `<input type="text" name="osmaquina" id="osmaquina" value="${data2[0].serie}">` +
                    '</div>' +
                '</div>' +
                '<div class="control-group" id="x2">' +
                    '<div class="controls">' +
                        `<input type="text" name="osnome" id="osnome" value="${data[0].nome}">` +
                    '</div>' +
                '</div>'
            )
        } else if (infos2.length > 1) {
            $("#x1").remove()
            $("#x2").remove()
            $(osform).prepend(
                '<div class="control-group" id="y1">' +
                    '<div class="controls">' +
                        '<select form="osform" name="osmaquinas" id="osmaquinas">' +
                            '<option value="" hidden>Selecione</option>' +
                        '</select>' +
                    '</div>' +
                '</div>' +
                '<div class="control-group" id="y2">' +
                    '<div class="controls">' +
                        `<input type="text" name="osnome" id="osnome" value="${data[0].nome}">` +
                    '</div>' +
                '</div>'
            )
        }
        setTimeout( () => {
            infos2.forEach(element => {
                $("#osmaquinas").append('<option>' + element.serie + '</option>');
            });
        }, 500)
    }
}


$("#oscpfcnpj").focusout(function () {
    var texto = $(this).val()
    valida_cpf(texto)
})
