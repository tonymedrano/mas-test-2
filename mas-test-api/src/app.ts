// lib/app.ts
import express = require("express");
import path from "path";

import data from "./data/phones.json";

// Create a new express application instance
const app: express.Application = express();

app.use('/images/phones', express.static(__dirname + '/phones'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/phones", function(req, res) {
  res.send(data);
});

app.listen(8081, function() {
  console.log("Example app listening on port 8081!");
});
