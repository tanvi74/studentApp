const express = require('express');
const app = express();
const mongoDb = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.urlencoded({extended: false}));

// Import Routes
const marksRoute = require('./routes/marks');

// Connect to db
mongoDb();

// Middleware
app.use(express.json());
app.use(cors());

// Route Middlewares
app.use('/api', marksRoute);

app.listen(5000, ()=> console.log("Server is running") )