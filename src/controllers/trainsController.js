const database = require("../dbConfig.js");

const trainsController = {
  getByStationId: async (req, res, next) => {
    console.log("Start of `getByStationId`");
    // const { stationId } = req.params;
    // const queryString =`SELECT trains.id from trains LEFTJOIN station on station.id=trains.station-id"
    //   try {
    //   const { rows } = await database.query(queryString);
    //   res.json(rows);
    // } catch(error) {
    //   console.error(error);
    //   res.sendStatus(400).send("Please query valid id");
    // }
  },
  getAllTrains: async (req, res, next) => {
    console.log("Start of `getAllTrains`");
    const queryString = `SELECT * from trains ORDER BY id ASC;`;
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.sendStatus(400).send("");
    }
  },
  setMaintenance: async (req, res, next) => {
    const { id } = req.params;
    const { maintenance } = req.body;
    const queryString = `Update * from "trains" SET maintence={$maintenance? "false":"true"}{$maintenance===false? "true":"false"} WHERE id={$id};`;
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.sendStatus(404);
    }
  },
  setStation: async (req, res, next) => {
    console.log("Start of `setStation`");
    const { id } = req.params;
    const { stopid } = req.body;
    const queryString = `Update trains SET stopid='${stopid ? stopid : ""}' WHERE id=${id};`;
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.sendStatus(404);
    }
  },
};

module.exports = trainsController;
