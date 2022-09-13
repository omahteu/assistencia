$(document).on("click", "#osexcluir", function(){
    var identificador = $(this).attr("name")
    inicioModal('modau-camareiras')
    var box = document.forms.namedItem("formOs").id
    document.forms.namedItem("formOs").action = "../php/ajax/exclusao/os.php"
    $(`#${box}`).html(
        '<div class="text-center mt-4">'+
        '<button type="submit" style="color: #f14444!important" id="registrar_componente"'+
          'class="btn btn-white btn-rounded btn-md">'+
          'Excluir'+
        '</button>'+
      '</div>'
    )
    $(`#${box}`).prepend(
        '<textarea class="linput" placeholder="Motivo" name="osmotivo" id="osmotivo" cols="30" rows="10"></textarea>'+
        `<input type="text" class="form-control mb-4 field-icon linput" value="${identificador}" name="aidentificador">`
    )
})
