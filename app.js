const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyparser = require('body-parser');
const covidRoute = require('./API/covid19/covid19');
const weatherRoute = require('./API/weather/weather');
const postRoute = require('./API/post/post');

app.use(cors());
app.use(bodyparser.json());
app.use('/api/covid19', covidRoute);
app.use('/api/weather',weatherRoute);
app.use('/api/posts',postRoute);

app.get('/', (req,res) => {
  res.status(200).json({});
});

const port = process.env.PORT || 8080;

mongoose.connect(
  process.env.DB_CONN,
  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
  () => console.log('Connected to DB')
);

app.listen(port);
