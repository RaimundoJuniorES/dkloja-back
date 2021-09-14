const mongoose = require('mongoose');
const Sale = mongoose.model('Sale');
const { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear } = require('date-fns');

const current = new Date();

module.exports = {
    async all(req, res){
        await Sale.find()
            .sort('dataCobranca')
            .then (response => {
                return res.status(200).json(response);
            })
            .catch( error => {
                return res.status(500).json(error);
            })
    },

    async today(req, res){
        await Sale
            .find({
                'dataCobranca' : { '$gte' : startOfDay(current), '$lte' : endOfDay(current) }
            })
            .sort('dataCobranca')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json("erro: "+error);
            })

        // return res.status(200).json({nome:'rai'});
    },

    async week(req, res){
        await Sale
            .find({
                'dataCobranca' : { '$gte' : startOfWeek(current), '$lte' : endOfWeek(current) }
            })
            .sort('dataCobranca')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json("erro: "+error);
            })
    },

    async month(req, res){
        await Sale
            .find({
                'dataCobranca' : { '$gte' : startOfMonth(current), '$lte' : endOfMonth(current) }
            })
            .sort('dataCobranca')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json("erro: "+error);
            })
    },

    async year(req, res){
        await Sale
            .find({
                'dataCobranca' : { '$gte' : startOfYear(current), '$lte' : endOfYear(current) }
            })
            .sort('dataCobranca')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json("erro: "+error);
            })
    },

    async late(req, res){
        const sale = await Sale.find({'dataCobranca' : { '$lt' : current }})
        .sort('dataCobranca')
        
        return res.status(200).json(sale);
    },
}