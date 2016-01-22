var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name:String,
  created:{type: Date, default: new Date}
})

mongoose.model('Customer', customerSchema);