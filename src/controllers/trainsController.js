const database = require("../dbconfig.js");

const trainsController = {
  // Fetch all trains and Left join the stops in order to use this function for other functionalities
  getAllTrains: async (req, res) => {
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
    try {
      await database.query(queryString);
      next();
    } catch (error) {
      console.error(error);
      res.sendStatus(404);
    }
  },

  // Updating stopid of a specific train by trains id
  setStation: async (req, res) => {
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

  // Grabbing all trains by specific id
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
