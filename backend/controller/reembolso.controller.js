const Reembolso = require('../models/Reembolso')

const cadastrar = async (req, res) => {
    const valores = req.body

    let valorAuxilio = 0
    const dias = Number(valores.diasEmTransito)
    const custoFixo = Number(valores.ajudaCusto)

    // Diretrizes financeiras para o cálculo do auxílio baseado na rota e pernoites
    if (valores.categoriaRota === 'regional') {
        valorAuxilio = (dias * 45.00) + (custoFixo * 0.08)
    } else if (valores.categoriaRota === 'interestadual') {
        valorAuxilio = (dias * 85.00) + (custoFixo * 0.12)
    } else if (valores.categoriaRota === 'internacional') {
        valorAuxilio = (dias * 130.00) + (custoFixo * 0.16)
    }

    const valores2 = {
        nome: valores.nome,
        modelo: valores.modelo,
        ajudaCusto: custoFixo,
        diasEmTransito: dias,
        categoriaRota: valores.categoriaRota,
        valorAuxilio: valorAuxilio
    }

    try {
        await Reembolso.create(valores2)
        res.status(201).json({ message: 'Reembolso cadastrado com sucesso!' })
    } catch (err) {
        console.error('Erro ao cadastrar o reembolso!', err)
        res.status(500).json({ message: 'Erro ao cadastrar reembolso!' })
    }
}

const listar = async (req, res) => {
    try {
        const dados = await Reembolso.findAll()
        res.status(200).json(dados)
    } catch (err) {
        console.error('Erro ao listar reembolsos!', err)
        res.status(500).json({ message: 'Erro ao listar reembolsos!' })
    }
}

const consultar = async (req, res) => {
    const id = req.params.id
    try {
        const registro = await Reembolso.findByPk(id)
        if (!registro) {
            return res.status(404).json({ message: 'Registro não encontrado!' })
        }
        res.status(200).json(registro)
    } catch (err) {
        console.error('Erro ao consultar reembolso!', err)
        res.status(500).json({ message: 'Erro ao consultar reembolso!' })
    }
}

const apagar = async (req, res) => {
    const id = req.params.id
    try {
        const registro = await Reembolso.findByPk(id)

        if (!registro) {
            return res.status(404).json({ message: 'Registro não encontrado!' })
        }  
              
        await Reembolso.destroy({ where: { codigo: id } })
        res.status(200).json({ message: 'Reembolso apagado com sucesso!' })
    } catch (err) {
        console.error('Erro ao apagar reembolso!', err)
        res.status(500).json({ message: 'Erro ao apagar reembolso!' })
    }
}

module.exports = { cadastrar, listar, consultar, apagar }