//Routing the app
const cors = require('cors') ;

module.exports = (app) => {
    console.log("in routes")
    let mysql = require('../controllers/mysqlController') ; 
    let appp = require('../controllers/applications') ;

    const allowedOrigins = [
      'capacitor://localhost',
      'ionic://localhost',
      'http://localhost',
      'http://localhost:8080',
      'http://localhost:8100'
    ];
    
    // Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
    const corsOptions = {
      origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Origin not allowed by CORS'));
        }
      }
    }
    
    // Enable preflight requests for all routes
    app.options('*', cors(corsOptions));
    
    
    app.route("/").get(mysql.getApp , cors(corsOptions)) ; 

    app.route("/login").post(mysql.login2 , cors(corsOptions)) ; 
    app.route("/update").get(mysql.updateStatus , cors(corsOptions)) ; 
    app.route("/addApp").get(mysql.makeApp , cors(corsOptions)) ; 
    app.route("/deleteApp").get(mysql.deleteApp , cors(corsOptions)) ; 

    // app.route("/post").get(mysql.postData) ;

    // app.route("/new").get(mysql.getUsers);




}