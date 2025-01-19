const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const logger = require('morgan')
// require("log-node")();

//iniciando o app
const port = 8080;
const database = 'nodeapi';
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cors());

//iniciando o db
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`)
    .then(() => {
        console.log(`-> Connected to Database: ${database}`);
    })
    .catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

requireDir("./src/models");

//rotas
app.use(require("./src/routes"));

app.listen(port, () => {
    console.log(`-> API running on port ${port}`);
});