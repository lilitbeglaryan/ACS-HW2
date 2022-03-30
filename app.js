

/*app.js*/
const errorHandler = require('./middlewares/error_handler_middleware');
const express = require("express");
const app = express();
const citiesController= require("./cities/cities.controller.js");

app.use("/cities",citiesController);

app.get("/cities", (req, res) => {
  console.log("I'm the root!");
  throw new Error("No Zip Code provided!");
  return res.send(result);

});

app.get("/*", (req, res) => {
  console.log("I'm the root!");
  throw new Error("Invalid URL!");
  return res.send(result);

});

app.listen(3000, () => {
  console.log("Server is running! 🚀");
});

app.use(errorHandler);