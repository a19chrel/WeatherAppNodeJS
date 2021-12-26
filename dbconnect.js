const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./weather.db', (err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log("connected to db");
    }
})

module.exports = db;