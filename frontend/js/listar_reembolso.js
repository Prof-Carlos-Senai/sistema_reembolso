let resposta = document.getElementById('resposta')
let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/reembolso')
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        resposta.innerHTML += `
            <table>
                ${criarThead()}
                ${criarTbody(dados)}
            </table>
        `
    })
    .catch((err) => {
        console.error('Erro ao listar os dados', err)
    })
})

function criarTbody(dados) {
    let corpo = ''
    corpo += `<tbody>`
    dados.forEach(el => {
        corpo += `<tr>`
        corpo += `<td>${el.codigo}</td>`
        corpo += `<td>${el.nome}</td>`
        corpo += `<td>${el.modelo}</td>`
        corpo += `<td>R$ ${el.ajudaCusto}</td>`
        corpo += `<td>${el.diasEmTransito}</td>`
        corpo += `<td>${el.categoriaRota}</td>`
        corpo += `<td>R$ ${el.valorAuxilio}</td>`
        corpo += `</tr>`
    })
    corpo += `</tbody>`
    return corpo
}

function criarThead() {
    let cabecalho = ''
    cabecalho += `
        <thead>
            <tr>
                <th>Código</th>
                <th>Motorista</th>
                <th>Veículo</th>
                <th>Ajuda Fixa</th>
                <th>Dias</th>
                <th>Rota</th>
                <th>Auxílio Total</th>
            </tr>
        </thead>
    `
    return cabecalho
}
