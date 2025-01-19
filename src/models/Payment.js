const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PaymentSchema = new mongoose.Schema({
    saleId: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

PaymentSchema.plugin(mongoosePaginate);

mongoose.model('Payment', PaymentSchema);