$(document).on("change", "#novoestado", function(){
    var estado = $(this).val()

    if (estado == "finalizado"){
        document.forms.namedItem("formOs").action = "../php/ajax/insercao/osconcluidas.php"
        var box = document.forms.namedItem("formOs").id
        $(`#${box}`).prepend(
            `<input type="text" class="form-control mb-4 field-icon" placeholder="Responsável Técnico" name="responsavel" required>`
        )
    }
})
