import { usuarios } from "../exibicao/usuarios.js"


$(document).on("click", "#entrar", function () {
    var usuario = $("#usuario").val()
    var senha = $("#senha").val()
    if (usuario == "" && senha == ""){
        alert("Login Incorreto!")
    } else {
        usuarios(usuario, senha)
    }
})
