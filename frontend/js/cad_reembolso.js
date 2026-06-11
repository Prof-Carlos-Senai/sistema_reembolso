let resposta = document.getElementById('resposta')

let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()
    
    // O nome do ID é exatamente o nome da variável que vai para o banco de dados
    const nome = document.getElementById('nome').value
    const modelo = document.getElementById('modelo').value
    const ajudaCusto = Number(document.getElementById('ajudaCusto').value)
    const diasEmTransito = Number(document.getElementById('diasEmTransito').value)
    const categoriaRota = document.getElementById('categoriaRota').value

    const valores = {
        nome: nome,
        modelo: modelo,
        ajudaCusto: ajudaCusto,
        diasEmTransito: diasEmTransito,
        categoriaRota: categoriaRota
    }
    console.log(valores)

    fetch('http://localhost:3000/reembolso',{
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados.message)
        resposta.innerHTML = ``
        resposta.innerHTML += `<p>${dados.message}</p>`
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados!',err)
    })
    document.querySelector('form').reset()
})
