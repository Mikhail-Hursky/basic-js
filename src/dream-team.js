const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  throw new CustomError('Not implemented');
  let dreamTeam = '';
  for (let name of arr) {
    if((typeof name)==='string'){
      dreamTeam+=name[0]
    }
  }
  dreamTeam = dreamTeam.split('').sort().join('')
  return dreamTeam;
};
