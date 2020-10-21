const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let len = arr.length-1;
  let ret = [];
  arr.forEach( (val, i) => {
    switch (val) {
      case "--discard-prev":
        if (i > 0) {
          if (arr[i - 2] != '--discard-next') ret.pop();
        }
        break;
      case "--double-prev":
        if (i > 0) {
          if (arr[i - 2] != '--discard-next')
            ret.push(arr[i - 1]);
        }
        break;
      case "--double-next" :
        if (len > i) ret.push(arr[i + 1]);
        break;
      case "--discard-next":
        break;
      default :
        if (arr[i - 1] != "--discard-next") ret.push(val);
        break;
    }
  });
  return ret;
};
