import express from "express"
import { config } from "dotenv"

config()
import routes from "./Routes/Emoções.Routes.js";

const serverPort = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(routes);

app.listen(serverPort, () => {
    console.log(`💥 Server started on http://localhost:${serverPort}`)
})
