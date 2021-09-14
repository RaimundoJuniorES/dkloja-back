const mongoose = require('mongoose');
const Sale = mongoose.model('Sale');
const Client = mongoose.model('Client')

const current = new Date();

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const sales = await Sale.paginate({}, { page, limit: 10 });

        return res.json(sales);
    },

    async show(req,res){
        const sale = await Sale.findById(req.params.id);

        return res.json(sale);
    },

    async store(req, res){
            await Sale.create(req.body)
            .then(result => {
                return res.json('Cadastrado com sucesso');
            })
            .catch(err => {
                console.error(`Fatal error occurred: ${err}`)
                return res.json(`Erro ao cadastrar venda: ${err}`);            
            });
    },

    async update(req, res){
        const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(sale);
    },

    async late(req, res){
        const sale = await Sale.find({'createdAt' : { '$lt' : current }})
        .sort('createdAt')
        
        return res.status(200).json(sale);
    },
    
    async pay(req, res){
        const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(sale);
    },

    async destroy(req, res){
        await Sale.findByIdAndDelete(req.params.id);

        return res.send("Deletado com Sucesso");
    }
};