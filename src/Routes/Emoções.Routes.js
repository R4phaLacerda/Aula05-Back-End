import { Router } from "express";

const emocoesRoutes = Router()

let emocoes = [
    {
        Id: 1,
        Nome: "Nojinho",
        Cor: "Verde"
    },
    {
        Id: 2,
        Nome: "Raiva",
        Cor: "Vermelho"
    },
    {
        Id: 3,
        Nome: "Ansiedade",
        Cor: "Laranja"
    },
    {
        Id: 4,
        Nome: "Medo",
        Cor: "Roxo"
    }
]
emocoesRoutes.get("/emocoes", (req, res) => {
    return res.status(201).send( emocoes )
})

emocoesRoutes.post("/emocoes", (req, res) => {
    const { Nome, Cor } = req.body
    const novaEmocao = {
        Id: emocoes.length +1,
        Nome: Nome,
        Cor: Cor
    }
    emocoes.push(novaEmocao)
    return res.status(200).send( emocoes )
})

export default emocoesRoutes