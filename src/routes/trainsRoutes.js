const express = require("express");
const router = express.Router();

const trainsController = require("../controllers/trainsController");

// get multiple trains by StopId
router.get("/:stationId", trainsController.getByStationId);

module.exports = router;
