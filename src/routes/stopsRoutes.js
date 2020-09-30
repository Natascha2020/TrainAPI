const express = require("express");
const router = express.Router();

const stopsController = require("../controllers/stopsController");

// Get all stops available
router.get("/", stopsController.getStops);

// GET stop by id
router.get("/:id", stopsController.getTrainsByStopId);

module.exports = router;
