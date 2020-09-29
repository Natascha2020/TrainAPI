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
  getTrains: async (req, res) => {
    console.log("Start of `getTrains`");
    // const queryString = `SELECT trains.id from trains LEFTJOIN station on station.id=trains.station-id`;
    // try {
    //   const { rows } = await database.query(queryString);
    //   res.json(rows);
    // } catch {
    //   error;
    //   console.error(error);
    //   res.sendStatus(404).send("Please query valid id");
    // }
  },
  sendTrainToStop: async (req, res) => {
    console.log("Start of `sendTrainToStop`");
    // const queryString = `SELECT trains.id from trains LEFTJOIN station on station.id=trains.station-id`;
    // try {
    //   const { rows } = await database.query(queryString);
    //   res.json(rows);
    // } catch {
    //   error;
    //   console.error(error);
    //   res.sendStatus(404).send("Please query valid id");
    // }
  },
};

module.exports = trainsController;
