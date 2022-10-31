const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatapp_development');

const db = mongoose.connection;

db.on('err', console.error.bind(console, "error in connecting data base"));
db.once('open', function(){
    console.log("connected to data base :: maongo db");
});


module.exports = db;