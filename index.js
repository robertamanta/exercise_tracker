require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));


mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true });



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post("/api/users",(req,res)=>
{
   let username = req.body.username;

})



app.listen(port, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port: " + port)
    else
        console.log("Error occurred, server can't start", error);
});