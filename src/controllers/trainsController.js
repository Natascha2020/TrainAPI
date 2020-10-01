const database = require("../dbconfig.js");
const paramsCheck = require("../helpers/paramsCheck.js");



const trainsController = {
  getAllTrains: async (req, res, next) => {
    console.log("Start of `getAllTrains`");
    const queryString = `SELECT * from trains ORDER BY id ASC;`;
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
    const queryString = `SELECT * from trains WHERE maintenance='${false}';`;
    console.log(queryString);
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
