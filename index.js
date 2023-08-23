const express = require("express");
const color = require("colors");
const path = require("path");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const PORT = process.env.PORT || 8000;
app.use(express.json());

const usersRoute = require("./routes/usersRoute");
const busesRoute = require("./routes/busesRoute");
const bookingsRoute = require("./routes/bookingsRoute");

app.use("/api/users", usersRoute);
app.use("/api/buses", busesRoute);
app.use("/api/bookings", bookingsRoute);

// Deployment Part Starting
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

// Deployment Part End

app.listen(PORT, () =>
  console.log(`Node server listening on port ${PORT}!`.bgCyan)
);
