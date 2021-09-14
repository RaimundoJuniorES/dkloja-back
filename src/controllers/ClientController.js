const mongoose = require('mongoose');
const ProductController = require('./ProductController');
const { index, store } = require('./ProductController');

const Client = mongoose.model('Client');

module.exports = {
    async index(req, res){
        const{ page = 1 } = req.query;
        const clients = await Client.paginate( {}, { page, limit: 10 })

        return res.json(clients);
    },  

    async show(req, res){
        const client = await Client.findById(req.params.id);

        return res.json(client);
    },

    async store(req, res){        
        await Client.find({ "cpf": req.body.cpf })
        .then(async response => {
            if(response.length > 0){
                return res.json({
                    status: false,
                    msg: "Cliente com cpf já cadastrado!"
                })
            }else{
                await Client.create(req.body)
                .then(response => res.json({
                    status: false,
                    msg: "Cliente cadastrado com sucesso!",
                    data: response.data
                }))
                .catch(error => res.json(error))
            }
        })
        .catch(console.log)
    },

    async update(req, res){
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(client);
    },

    async destroy(req, res){
        await Client.findByIdAndDelete(req.params.id);

        return res.send("Deletado com Sucesso");
    }
}