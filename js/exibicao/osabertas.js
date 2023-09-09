export async function listarOsAbertas() {
    const raiz = window.location.host
    const dados = await fetch(`http://${raiz}/assistencia/php/ajax/leitura/os.php`);
    const resposta = await dados.json();
    if (resposta['status']) {
        var infos = resposta["dados"]
        var registro = infos.filter(el => el.estado != "Finalizado")
        var tabela = document.getElementById("osemandamento")
        tabela.innerHTML = ""
        registro.forEach(e => {
            tabela.innerHTML += `
                <tr>
                    <td>${e.id}</td>
                    <td>${e.cpfcnpj}</td>
                    <td>${e.nome}</td>
                    <td>${e.serie}</td>
                    <td>${e.descricao}</td>
                    <td>${e.estado}</td>
                    <td>
                        <button type="button" name="${e.id}" class="btn btn-warning" id="osalterar">Alterar</button>
                        <button type="button" name="${e.id}" class="btn btn-danger" id="osexcluir">Excluir</button>
                    </td>
                </tr>
            `
        });
    } else {
        console.log(resposta["msg"])
    }
}
