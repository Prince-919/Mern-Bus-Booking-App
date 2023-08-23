const mongoose = require("mongoose");

mongoose.connect(process.env.MAONGO_URL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo Db Connection Successfull".bgGreen);
});

db.on("error", () => {
  console.log("Mongo Db Connection Failed".bgRed);
});
