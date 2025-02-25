const mongoose = require('mongoose');
// const ProductController = require('./ProductController');
// const { index, store } = require('./ProductController');

const Payment = mongoose.model('Payment');
const Sale = mongoose.model('Sale');

module.exports = {
    async index(req, res){
        // const{ page = 1 } = req.query;
        // const clients = await Client.find( {}, { page, limit: 10 })
        const payments = await Payment.find()

        return res.json(payments);
    },  

    // async show(req, res){
    //     const client = await Client.findById(req.params.id);

    //     return res.json(client);
    // },

    async store(req, res){
        const { saleId, value } = req.body;     
        console.log(saleId);

        const sale = await Sale.findById(saleId);



        console.log(sale)

        sale.amountPaid = Number(sale.amountPaid) + Number(value);

        await Payment.create(req.body)
            .then(async response => {
                await Sale.updateOne(sale);

                res.json({
                status: false,
                msg: "Pagamento realizado com sucesso!",
                data: response.data
            })})
            .catch(error => res.json(error))
    },

    async update(req, res){
        const client = await Payment.findByIdAndUpdate(req.params.id, req.body);

        return res.json(client);
    },

    async destroy(req, res){
        await Payment.findByIdAndDelete(req.params.id);

        return res.send("Pagamento deletado com sucesso");
    }
}