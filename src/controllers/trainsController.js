const database = require("../dbconfig.js");
/* const paramsCheck = require("../helpers/paramsCheck.js"); */

// SELECT trains.id, trains.name, trains.length, stops.city
//     FROM trains
//     INNER JOIN stops ON trains.stopid =stops.id
//     ORDER BY trains.id;

// Fetch all trains and Left join the stops in order to use this function for other functionalities
const trainsController = {
  getAllTrains: async (req, res, next) => {
    const queryString = `
    SELECT *
    FROM stops
    FULL JOIN trains ON trains.stopid = stops.id
    ORDER BY trains.id ASC`;
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.sendStatus(400).send("Please query valid id");
    }
  },

  // Fetch all trains not in maintenance (getRunningTrains)
  getRunningTrains: async (req, res) => {
    //  const { maintenance } = req.body;
    const queryString = `SELECT * from trains WHERE maintenance='${false}' ORDER BY trains.id ASC;`;
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.sendStatus(400).send("Please query valid id");
    }
  },

  setMaintenance: async (req, res, next) => {
    const { id } = req.params;
    const { maintenance } = req.body;
    const queryString = `Update "trains" SET maintenance='${maintenance}' WHERE id=${id} RETURNING*;`;
    /*  const validParams = paramsCheck([maintenance]);
    if (!validParams) {
      res.sendStatus(400).send("Please insert valid data for parameters");
      return;
    } */
    try {
      await database.query(queryString);
      next();
    } catch (error) {
      console.error(error);
      res.sendStatus(404);
    }
  },
  setStation: async (req, res, next) => {
    const { id } = req.params;
    const { stopid } = req.body;
    const queryString = `Update trains SET stopid='${stopid ? stopid : ""}' WHERE id=${id};`;
<<<<<<< HEAD
    // console.log(queryString);
=======
>>>>>>> 819ed7827d91d9ef568e6a2368b9ae33b245a892
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.sendStatus(404);
    }
  },
  getTrainsbyId: async (req, res) => {
    const { id } = req.params;
    const queryString = `SELECT * from trains WHERE id=${id};`;
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.sendStatus(400).send("Please query valid id");
    }
  },
};

module.exports = trainsController;
