$(document).on("change", "#icomponentes", function(){
    var item = $(this).val()
    var campo_texto = document.forms.namedItem("formComponentes")[1]
    console.log(campo_texto)

    switch (item) {
        case "placa":
            $(campo_texto).attr("placeholder", "Placa").attr("id", "placa").attr("name", "placa")
            break;

        case "processador":
            $(campo_texto).attr("placeholder", "Processador").attr("id", "processador").attr("name", "processador")
            break

        case "memoria":
            $(campo_texto).attr("placeholder", "Memória").attr("id", "memoria").attr("name", "memoria")
            break

        case "hd":
            $(campo_texto).attr("placeholder", "HD").attr("id", "hd").attr("name", "hd")
            break

        case "fonte":
            $(campo_texto).attr("placeholder", "Fonte").attr("id", "fonte").attr("name", "fonte")
            break

        default:
            $(campo_texto).attr("placeholder", "")
            $(campo_texto).attr("id", "")
            $(campo_texto).attr("name", "")
            break;
    }
})