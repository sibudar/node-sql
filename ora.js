const express = require('express')
const app = express() 
const mysql = require('mysql')
const port = 9001

const conn = mysql.createConnection({
    database: 'employees',
    password: '',
    user: 'root',
    host: 'localhost'
})

conn.connect((error , response) => {
    if (error) throw error
})


app.get('/',(req,res)=>{
    console.log("its working")

    conn.query('select * from customers ;', (error, rows) => {
        res.send(rows);
    })
})



app.listen(port , () => {
    console.log("hey")
})