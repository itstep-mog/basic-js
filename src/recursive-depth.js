const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;

    for (const item of arr) {
      if (Array.isArray(item)) {
        let count = this.calculateDepth(item); // т.к class испозьзую this, а то тест на рекурсию не проходит
        if (result < 1 + count) {
          result = 1 + count;
        }
      }
    }
    return result;
}
};
