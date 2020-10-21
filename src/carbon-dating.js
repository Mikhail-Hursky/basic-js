const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN = 0.693;

module.exports = function dateSample(/* sampleActivity */) {
  if (isNaN(sampleActivity) || sampleActivity <= 0 ||  sampleActivity > 15 || typeof sampleActivity !== 'string') {
    return false;
  }
  const t = Math.ceil(Math.log(sampleActivity / MODERN_ACTIVITY ) / LN * HALF_LIFE_PERIOD) * -1;
  return t
};
