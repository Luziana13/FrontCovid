const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./api/routes");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log("[Server] online " + new Date()));