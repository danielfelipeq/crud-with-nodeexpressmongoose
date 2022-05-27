const mongoose = require("mongoose");

function connect() {
  mongoose.connect("mongodb://localhost:27017/practica", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("Connected to database");
  });
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
  return mongoose.connection;
}

module.exports = { connect };
