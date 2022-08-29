$(document).one("ready", function() {
    estar_logado()
})

function estar_logado(){
    window.location = "./html/home.html"

    /*
    var usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        window.location = "../index.html"
    } else {
        window.location = "./html/home.html"
    }
    */
}
