export async function usuarios(usuario, senha) {
    const raiz = window.location.href
    const dados = await fetch(`${raiz}/php/ajax/leitura/usuarios.php`);
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        var box = infos.filter(user => user.nome == usuario)
        if (box.length > 0) {
            box.forEach(e => {
                if (e.nome == usuario && e.senha == senha) {
                    sessionStorage.setItem("chave", "logado")
                    window.location.href = `${raiz}html/home.html`
                } else {
                    alert("Senha Inválida")
                }
            });
        } else {
            alert("Login Incorreto!")
        }
    } else {
        console.log(resposta["msg"])
    }
}
