const express = require("express");
const app = express();
const config = require("./config.json");

const aws = require("aws-sdk");

const { accessKeyId, secretAccessKey, region } = config;

aws.config.update({ accessKeyId, secretAccessKey, region });
const PORT = 1000;

const params = {};

app.get("/send", (req, res) => {
  res.send();
});

app.listen(PORT, () => console.log("app listening on port", PORT));
