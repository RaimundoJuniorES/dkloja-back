const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const ClientController = require("./controllers/ClientController");
const SaleController = require("./controllers/SaleController");
const CobrancaController = require("./controllers/CobrancaController");

//Rotas Cliente
routes.get("/clients", ClientController.index);
routes.get("/client/:id", ClientController.show);
routes.post("/client", ClientController.store);
routes.put("/client/:id", ClientController.update);
routes.delete("/client/:id", ClientController.destroy);

//Rotas Produto
routes.get("/products", ProductController.index);
routes.get("/product/:id", ProductController.show);
routes.post("/product", ProductController.store);
routes.put("/product/:id", ProductController.update);
routes.delete("/product/:id", ProductController.destroy)

//Rotas de venda
routes.get("/sales", SaleController.index);
routes.get("/sale/:id", SaleController.show);
routes.post("/sale", SaleController.store);
routes.put("/sale/:id", SaleController.update);
routes.delete("/sale/:id", SaleController.destroy);

//Rotas de cobranca
routes.get('/cobranca/all', CobrancaController.all);
routes.get('/cobranca/today', CobrancaController.today);
routes.get('/cobranca/week', CobrancaController.week);
routes.get('/cobranca/month', CobrancaController.month);
routes.get('/cobranca/year', CobrancaController.year);
routes.get("/cobranca/late", CobrancaController.late);

//rota de pagamento
routes.put("/sale/:id", SaleController.pay);

module.exports = routes;