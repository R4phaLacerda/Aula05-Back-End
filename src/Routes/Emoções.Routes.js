import { Router } from "express";

const emocoesRoutes = Router()

const emocoes = [
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
app.get("/emocoes", (req, res) => {
    return res.status(200).send( emocoes )
})

app.post("/emocoes", (req, res) => {
    const { Nome, Cor } = req.body
    const novaEmocao = {
        Id: emocoes.length +1,
        Nome: Nome,
        Cor: Cor
    }
    emocoes.push(novaEmocao)
    return res.status(200).send( emocoes )
})