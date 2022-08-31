$("#oscpfcnpj").focusout(function(){
    var texto = $(this).val()
    var osform = document.forms.namedItem("osform")
    //console.log(osform)

    if(texto.length == 0){
        alert("Usuário não possui maquinas")
    } else if (texto.length == 1){
        $("#y").remove()
        $(osform).prepend(
            '<div class="control-group" id="x">'+
                '<div class="controls">'+
                    '<input type="text" id="maquina" placeholder="" disabled>'+
                '</div>'+
            '</div>'
        )  
    } else if( texto.length > 1){
        $("#x").remove()
        $(osform).prepend(
            '<div class="control-group" id="y">'+
                '<div class="controls">'+
                    '<select form="osform" name="maquinas" id="maquinas">'+
                        '<option value="" hidden>Selecione</option>'+
                    '</select>'+
                '</div>'+
            '</div>'
        )
    }

    casa()

})

function casa(){
    console.log("casa")
}