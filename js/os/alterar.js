$(document).on("click", "#osalterar", function(){
    var identificador = $(this).attr("name")
    inicioModal('modau-camareiras')
    var box = document.forms.namedItem("formOs").id
    document.forms.namedItem("formOs").action = "../php/ajax/alteracao/status.php"
    $(`#${box}`).html(
        '<div class="text-center mt-4">'+
        '<button type="submit" style="color: #f14444!important" id="registrar_componente"'+
          'class="btn btn-white btn-rounded btn-md">'+
          'Registrar'+
        '</button>'+
      '</div>'
    );
    $(`#${box}`).prepend(
        '<select class="form-control mb-4 field-icon lselect" form="formOs" name="novoestado" id="novoestado">'+
            '<option value="" hidden>Status</option>'+
            '<option value="analise">Em Análise</option>'+
            '<option value="aguardando">Aguardando Aprovação</option>'+
            '<option value="aprovado">Orçamento Aprovado</option>'+
            '<option value="manutencao">Em Manutenção</option>'+
            '<option value="finalizado">Finalizado</option>'+
        '</select>'+
        `<input type="text" class="form-control mb-4 field-icon linput" value="${identificador}" name="nserie">`
    )
})

function inicioModal(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}

function fimModal(){
    $('#modau-camareiras').removeClass('modau-container mostrar').addClass('modau-container')
    document.getElementById('FormOs').reset()
}
