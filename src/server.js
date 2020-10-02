require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const logRequest = require("./helpers/logRequests");

const stopsRoutes = require("./routes/stopsRoutes");
const trainsRoutes = require("./routes/trainsRoutes");

// Middlewares to format request/response
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Prevent cors-error from local client-server requests
app.use(cors());

//log requests
app.use(logRequest);

// Endpoints Train Routes
app.use("/trains", trainsRoutes);

// Endpoints Stops Routes
app.use("/stops", stopsRoutes);

app.listen(5000, () => console.log("Server is running on port 5000"));
