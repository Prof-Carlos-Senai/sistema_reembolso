let resposta = document.getElementById('resposta')
let btn_apagar = document.getElementById('btn_apagar')

btn_apagar.addEventListener('click', (e) => {
    e.preventDefault()
    const codigo = document.getElementById('codigo').value

    fetch(`http://localhost:3000/reembolso/${codigo}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados.message)
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>${dados.message}</p>`
    })
    .catch((err) => {
        console.error('Erro ao apagar os dados', err)
        resposta.innerHTML = '<p>Erro ao tentar apagar o registro.</p>'
    })
    document.querySelector('form').reset()
})
