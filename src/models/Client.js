const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        require: true,
    },
    bairro: {
        type: String,
        require: true,
    },
    rua: {
        type: String,
        require: true,
    },
    numero: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ClientSchema.plugin(mongoosePaginate);

mongoose.model('Client', ClientSchema);