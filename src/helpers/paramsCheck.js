// Checking input value of client request

const paramsCheck = (arrayOfParams) => {
  let result = true;
  for (let value of arrayOfParams) {
    if (!value || value === "") {
      result = false;
      break;
    }
  }
  return result;
};

module.exports = paramsCheck;
