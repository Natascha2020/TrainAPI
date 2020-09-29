const database = require("../dbConfig.js");

const trainsController = {
  getByStationId: async (req, res) => {
    /* const { stationId } = req.params; */
    console.log(test);
    //const queryString =`SELECT trains.id from trains LEFTJOIN station on station.id=trains.station-id"
    /*  try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch {
      error;
      console.error(error);
      res.sendStatus(400).send("Please query valid id");
    } */
  },
  getAllTrains: async (req, res) => {
    const queryString = `SELECT * from trains;`;
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch {
      error;
      console.error(error);
      res.sendStatus(400).send("Please query valid id");
    }
  },
  setMaintenance: async (req, res) => {
    const { id } = req.params;
    const { maintenance } = req.body;
    const queryString = `Update * from "trains" SET maintence={$maintenance? "false":"true"}{$maintenance===false? "true":"false"} WHERE id={$id};`;
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch {
      error;
      console.error(error);
      res.sendStatus(404);
    }
  },
};

module.exports = trainsController;
