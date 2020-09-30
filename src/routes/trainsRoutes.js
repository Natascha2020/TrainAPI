const express = require("express");
const router = express.Router();

const trainsController = require("../controllers/trainsController");

// get all trains
router.get("/", trainsController.getAllTrains);

// get multiple trains by StopId

router.get("/:id", trainsController.getTrainsbyId);

// Update train to specific station (send train to specific station)
router.put("/sendtostation/:id", trainsController.setStation);

// update maintenance property with trainid
router.put("/:id", (req, res, next) => trainsController.setMaintenance(req, res, next), trainsController.getAllTrains);

module.exports = router;
