const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/myusers',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String
});

User.plugin(passportLocalMongoose);


module.exports = mongoose.model('userData', User, 'userData');