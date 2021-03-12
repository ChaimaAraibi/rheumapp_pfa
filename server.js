const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const patientRoutes = require ("./routes/patientRoutes");
const cors = require('cors');
const PORT = 4000;
app.use(cors());
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://express:bookrecsys123@cluster0.9xnsy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(uri);



app.use('/patients', patientRoutes);
