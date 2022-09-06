import { usuarios } from "../exibicao/usuarios.js"


$("#entrar").click(function () {
    var usuario = $("#usuario").val()
    var senha = $("#senha").val()
    if (usuario == "" && senha == ""){
        alert("Login Incorreto!")
    } else {
        usuarios(usuario, senha)
    }
})
