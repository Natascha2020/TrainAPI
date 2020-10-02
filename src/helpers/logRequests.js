const fs = require("fs");

let logRequest = (req, res, next) => {
  let currentDate = new Date();
  let formattedDate =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  // accessing method, url and statuscode from request object
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  // acessing high-resolution real time in [seconds, nanoseconds]
  // getting request process duration in milliseconds
  let logTime = process.hrtime();
  const getRequestDuration = (processTime) => {
    //processTime as additional parameter, result of previous call to diff with current time
    const diff = process.hrtime(processTime);
    return (diff[0] * 1e9 + diff[1]) / 1e6;
  };
  let processTime = getRequestDuration(logTime);

  let currentLog = `[Date: ${formattedDate}] [Method: ${method}] [Url: ${url}] [Status: ${status}] [Duration: ${processTime} ms]`;
  //create-send to file the current request with log-data (date, method, url, statuscode)
  fs.appendFile("logRequests.txt", currentLog + "\n", (error) => {
    if (error) {
      res.sendStatus(500);
      console.log(error);
    }
  });
  next();
};

module.exports = logRequest;
