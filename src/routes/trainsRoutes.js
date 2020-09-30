const express = require("express");
const router = express.Router();

const trainsController = require("../controllers/trainsController");

// get all trains
router.get("/", trainsController.getAllTrains);

// update maintenance property with trainid
router.put("/:id", (req, res, next) => trainsController.setMaintenance(req, res, next), trainsController.getAllTrains);

router.get("/:id", trainsController.getTrainsbyId);

module.exports = router;
