const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const logger = require('morgan')
// require("log-node")();

//iniciando o app
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cors());

//iniciando o db
mongoose.connect("mongodb://localhost:27017/nodeapi");

requireDir("./src/models");

//rotas
app.use('/api', require("./src/routes"));

app.listen(3001);