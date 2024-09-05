import { Router } from "express";
import emocoesRoutes from "./Emoções.Routes.js"

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
})

routes.get("/2tds2", (req, res) => {
    return res.status(200).send({ message: "Hello, World!" })
})

routes.use("/emocoes", emocoesRoutes);
export default routes;