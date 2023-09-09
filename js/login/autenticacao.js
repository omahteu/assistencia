import { usuarios } from "../exibicao/usuarios.js"


$(document).on("click", "#entrar", function () {
    console.log(window.location.hostname)
    console.log(window.location.host)
    console.log(window.location.href)
    var usuario = $("#usuario").val()
    var senha = $("#senha").val()
    if (usuario == "" && senha == ""){
        alert("Login Incorreto!")
    } else {
        usuarios(usuario, senha)
    }
})
