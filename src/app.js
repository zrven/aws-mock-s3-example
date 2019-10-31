// 'use strict'
require('dotenv').config()
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import routes from "./routes/route";

const app = express();
app.use(bodyParser.json());
//Define context root and mount the routes
app.use("/api", routes);

const port = process.env.NODE_PORT || 4000;
http.createServer(app)
.listen(port, function(){
  console.log('Server running locally on port ', port);
})