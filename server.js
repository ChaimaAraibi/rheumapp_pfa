const express = require('express');
const app = express();
const patientRoutes = require ("./routes/patientRoutes");
const cors = require('cors');
const PORT = 4000;
app.use(cors());
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

const uri = "mongodb+srv://express:bookrecsys123@cluster0.9xnsy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
let mongoose = require("mongoose")
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://chaima:bookrecsys123@cluster0-z4urb.gcp.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(() => {
    console.log('Database sucessfully connected')
},
    error => {
        console.log('Database could not be connected: ' + error)
    }
)
app.use('/patients', patientRoutes);
