//
var meanController = require('./../controllers/meanController.js');

module.exports = function(app){
  app.get('/get_products', function (req, res){
    meanController.get_products(req,res);
  })
  app.get('/get_customers', function (req, res){
    meanController.get_customers(req,res);
  })
  
  app.get('/get_orders', function (req, res){
    meanController.get_orders(req,res);
  })
  app.post('/product/new', function (req, res){
    meanController.create_product(req,res);
  })
  app.post('/customer/new', function (req, res){
    meanController.create_customer(req,res);
  })
  app.post('/order/new', function (req, res){
    meanController.create_order(req, res);
  })
  app.post('/customer/:id',function (req,res){
    meanController.delete_customer(req,res);
  })
}