const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9001;

app.use(cors())
let x = require('./api/routes/routes');




x(app);



app.listen(port, () => {
  console.log("Everything is working on port " + port);
});
