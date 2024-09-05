import express from "express"
import { config } from "dotenv"

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

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

app.get("/personagem", (req, res) => {
    return res.status(200).send( personagem )
})

