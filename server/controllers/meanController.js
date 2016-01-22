var mongoose = require('mongoose');


var Customer =mongoose.model('Customer');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {
  create_product:function (req,res) {
    var new_product = new Product({name: req.body.name, 
                                  image: req.body.image, 
                                  description:req.body.description,
                                  quantity: req.body.quantity});
    new_product.save(function (err, data){
      if(err){
        console.log('DB cannot save new_product');
      }else{
        // console.log(data);
        res.redirect('/get_products');
      };
    })
  },
  get_products: function (req,res){
    Product.find({}, function(err,data){
      if(err){
        console.log('db cannot find products');
      }else{
        res.json(data);
      };
    })
  },
  create_customer: function (req,res){
    Customer.findOne({name:req.body.name}, function(err, data){
      if(err){
        console.log('db cannot find');
      }else{
        // console.log(data);
        if (data == null) {
          var new_customer = new Customer({name:req.body.name});
          new_customer.save(function (err,data){
            if(err){
              console.log(err);
            }else{
              // console.log(data);
              res.redirect('/get_customers');
            };
          })
        }else{
          res.json({'err':'please try another name'});
        };
      }
    })
  },
  get_customers: function (req,res){
    Customer.find({}, function(err,data){
      if(err){
        console.log('db cannot find products');
      }else{
        res.json(data);
      };
    })
  },
  delete_customer: function (req,res){
    // console.log(req.params.id);
    Customer.remove({_id:req.params.id}, function (err, data){
      if(err){
        console.log('db cannot delete');
      }else{
        console.log('delete');
        res.redirect('/get_customers');
      }
    })
  },
  create_order:function (req,res){
    // console.log(req.body)
    //req.body has all the information including avaible qty
    if (req.body.product.quantity >= req.body.quantity) {
      var new_order = new Order({customer:req.body.customer.name, 
                                customer_id:req.body.customer._id,
                                product:req.body.product.name,
                                quantity:req.body.quantity});
      new_order.save(function (err,data){
        if(err){
          console.log('db wrong');
        }else{
          Product.update({_id:req.body.product._id},{quantity:req.body.product.quantity-1},function(err, data){
            if(err){
              console.log('db err');
            }else{
              res.redirect('/get_orders');
            }
          })
        };
      })
    }else{
        res.json({message:'Sold Out!'});
    };
  },
  get_orders: function (req,res){
    Order.find({},function (err, data){
      res.json(data);
    })
  }
};