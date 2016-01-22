var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name:String,
  image:String,
  description:String,
  quantity:Number
})

mongoose.model('Product', productSchema);