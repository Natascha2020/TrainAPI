const database = require("../dbconfig.js");
const paramsCheck = require("../helpers/paramsCheck.js");

const trainsController = {
  getAllTrains: async (req, res) => {
    const queryString = `SELECT * from trains;`;
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.sendStatus(400).send("Please query valid id");
    }
  },
  setMaintenance: async (req, res, next) => {
    const queryString = `Update "trains" SET maintenance='${maintenance}' WHERE id=${id} RETURNING*;`;
    console.log(queryString);
    console.log(id);
    console.log(maintenance);
    const validParams = paramsCheck([maintenance]);
    if (!validParams) {
      res.sendStatus(400).send("Please insert valid data for parameters");
      return;
    }

    try {
      const { rows } = await database.query(queryString);
      next();
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
