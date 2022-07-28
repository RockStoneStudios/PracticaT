const express = require('express');
const dotenv = require('dotenv');
const routerS = require('./router');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
app.use(express.urlencoded({extended : false}));

app.use('/api',routerS);


module.exports = app;