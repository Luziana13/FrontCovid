const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const pessoaRoute = require("./api/routes/pessoa");
const denunciaRoute = require("./api/routes/denuncia");
const respostaRoute = require("./api/routes/resposta");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("", pessoaRoute);
app.use("", denunciaRoute);
app.use("", respostaRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("[Server] online " + new Date()));