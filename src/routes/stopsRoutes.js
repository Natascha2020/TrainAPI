const express = require("express");
const router = express.Router();

const stopsController = require("../controllers/stopsController");

// update station-id of a train
router.get("/", stopsController.getStops);
router.put("/stops", stopsController.updateStation);

module.exports = router;
