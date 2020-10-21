const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let cats = backyard.reduce((acc, subArray) => acc.concat(subArray), []);
    let i = 0;
    cats.forEach(x => x==='^^'?i++:'');
    return i;
};
