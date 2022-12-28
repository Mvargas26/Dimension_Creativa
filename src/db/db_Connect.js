const mongoose = require('mongoose');
require('dotenv').config();

function connect_DB(){
//Variables *
const user=process.env.MONGO_USER;
const password=process.env.MONGO_PASS;
const cluster=process.env.MONGO_CLUSTER;
const DBName=process.env.MONGO_DB_NAME;

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${user}:${password}@${cluster}.mu540an.mongodb.net/${DBName}?retryWrites=true&w=majority`)
.then(db=>console.log('DB is connected'))
.catch(err=>console.log('conecction Error: '+err));

}

module.exports = connect_DB;