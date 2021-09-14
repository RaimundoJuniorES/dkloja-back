const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SaleSchema = new mongoose.Schema({
    idClient:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    type:{
        type: Number,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    remains: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    dataCobranca:{
        type: Date,
        required: true
    }
});

SaleSchema.plugin(mongoosePaginate);

mongoose.model('Sale', SaleSchema)