let resposta = document.getElementById('resposta')
let btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click', (e) => {
    e.preventDefault()
    const codigo = document.getElementById('codigo').value

    fetch(`http://localhost:3000/reembolso/${codigo}`)
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        
        // Passamos o objeto 'dados' direto para a tabela, sem forEach ou colchetes
        resposta.innerHTML += `
            <table>
                ${criarThead()}
                ${criarTbody(dados)}
            </table>        
        `
    })
    .catch((err) => {
        console.error('Erro ao consultar os dados', err)
    })
    document.querySelector('form').reset()
})

// Função redefinida para montar a linha direto com as propriedades do objeto
function criarTbody(el) {
    let corpo = ''
    corpo += `<tbody>`
    corpo += `<tr>`
    corpo += `<td>${el.codigo}</td>`
    corpo += `<td>${el.nome}</td>`
    corpo += `<td>${el.modelo}</td>`
    corpo += `<td>R$ ${el.ajudaCusto}</td>`
    corpo += `<td>${el.diasEmTransito}</td>`
    corpo += `<td>${el.categoriaRota}</td>`
    corpo += `<td>R$ ${el.valorAuxilio}</td>`
    corpo += `</tr>`
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