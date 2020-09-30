const database = require("../dbConfig.js");

const stopsController = {
  updateStation: async (req, res, next) => {
    // update station-id of a specific train
    console.log(test);
    //const queryString =`SELECT * from "trains" SET VALUES`
    //  try {
    //   const { rows } = await database.query(queryString);
    //   res.json(rows);
    // } catch(error) {
    //   console.error(error);
    //   res.sendStatus(400).send("Please query valid id");
    // }
  },
  getStops: async (req, res) => {
    console.log("Start of `getStops`");
    const queryString = `SELECT * from stops ORDER BY id ASC;`;
    try {
      const { rows } = await database.query(queryString);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.sendStatus(400).send("");
    }
  },
};

module.exports = stopsController;
