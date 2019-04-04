const mysql = require('mysql') ;

const connection = mysql.createConnection({
    user: "root",
    password: "",
    database: "desbu",
    host: "localhost",
    multipleStatements: true
}); 

connection.connect((err)=>{
    if (err) throw err;
    console.log("connected");
    
});



module.exports = connection;