const express = require("express");
const router = express.Router();

const trainsController = require("../controllers/trainsController");

// get multiple trains by StopId
router.get("/", trainsController.getTrains);
router.get("/:stationId", trainsController.getByStationId);

// get all trains
router.get("/", trainsController.getAllTrains);

// update maintenance property with trainid
router.put("/:id", trainsController.setMaintenance);

module.exports = router;
