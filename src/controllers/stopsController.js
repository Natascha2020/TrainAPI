const database = require("../dbconfig.js");

const stopsController = {
  // Fetch all stop with an Inner join and use it for other functionalities
  getStops: async (req, res) => {
    const queryString = `SELECT *
    FROM stops 
    FULL JOIN trains ON trains.stopid = stops.id
    ORDER BY stops.id ASC;`;
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  },
  // Fetch all trains currently on a stop
  getTrainsByStopId: async (req, res) => {
    const { id } = req.params;
    const queryString = `SELECT * FROM stops LEFT JOIN trains ON trains.stopid=stops.id WHERE stops.id=${id};`;
    console.log(queryString);
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  },
};

module.exports = stopsController;
