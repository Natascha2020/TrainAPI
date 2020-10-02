const fs = require("fs");

const logRequest = (req, res, next) => {
  // accessing and formatting current time stamp
  const currentDate = new Date();
  const formattedDate =
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
  const method = req.method;
  const url = req.url;
  const status = res.statusCode;

  // acessing high-resolution real time in [seconds, nanoseconds]
  // getting request process duration in milliseconds
  // processTime as additional parameter, result of previous call to diff with current time
  const logTime = process.hrtime();
  const getRequestDuration = (processTime) => {
    const diff = process.hrtime(processTime);
    return (diff[0] * 1e9 + diff[1]) / 1e6;
  };
  const processTime = getRequestDuration(logTime);

  // create-send to file the current request with log-data (date, method, url, statuscode)
  const currentLog = `[Date: ${formattedDate}] [Method: ${method}] [Url: ${url}] [Status: ${status}] [Duration: ${processTime} ms]`;
  fs.appendFile("logRequests.txt", currentLog + "\n", (error) => {
    if (error) {
      res.sendStatus(500);
      console.log(error);
    }
  });
  next();
};

module.exports = logRequest;
