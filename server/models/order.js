var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  customer:String,
  customer_id:{type:Schema.Types.ObjectId, ref:'Customer'},
  product:String,
  quantity:Number,
  created:{type: Date, default: new Date}
})

mongoose.model('Order', orderSchema);