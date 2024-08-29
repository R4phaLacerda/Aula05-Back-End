import express from "express"
import { config } from "dotenv"

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

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

const personagem = [
    {
        Id: 100,
        Nome: "Totoro",
        Studio: "Ghibli",
        Vivo: true
    },
    {
        Id: 101,
        Nome: "Sal fisher",
        Studio: "Portablemoose",
        Vivo: false
    },
    {
        Id: 102,
        Nome: "Thiago Fritz",
        Studio: "Rafael Lange",
        Vivo: false
    },
    {
        Id: 103,
        Nome: "Klaus Hargreeves",
        Studio: "Netflix",
        Vivo: true
    }
]

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
})


app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
})

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

app.get("/personagem", (req, res) => {
    return res.status(200).send( personagem )
})

app.listen(serverPort, () => {
    console.log(`💥 Server started on http://localhost:${serverPort}`)
})
