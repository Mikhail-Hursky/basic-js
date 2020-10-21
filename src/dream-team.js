const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr)) {
    return arr.map((item) => {
      if (typeof item == 'string') return item.trim()[0].toUpperCase();
    }).sort().join('');
  } else {
    return false;
  }
};
