const express = require("express");
const router = express.Router();

const trainsController = require("../controllers/trainsController");

// get all trains
router.get("/", trainsController.getAllTrains);

// get multiple trains by StopId
router.get("/:stationId", trainsController.getByStationId);

// Update train to specific station (send train to specific station)
router.put("/sendtostation/:id", trainsController.setStation);

// update maintenance property with train id
router.put("/:id", trainsController.setMaintenance);

module.exports = router;
