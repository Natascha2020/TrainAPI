const database = require("../dbconfig.js");

// SELECT stops.id, stops.city, trains.name
//     FROM stops
//     INNER JOIN trains ON trains.stopid=stops.id
//     ORDER BY stops.id ASC

// Fetch all stop with an Inner join and use it for other functionalities
const stopsController = {
  getStops: async (req, res) => {
<<<<<<< HEAD
    console.log("Start of `getStops`");
    const queryString = `SELECT *
=======
    const queryString = `SELECT stops.id, stops.city, trains.name
>>>>>>> 819ed7827d91d9ef568e6a2368b9ae33b245a892
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
