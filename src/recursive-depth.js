const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result= 0;
    if (Array.isArray(arr)){
      result = 1;
      result+=arr.reduce((accum,item)=>{
        let save=this.calculateDepth(item);
        if (accum<save) return save
        return accum
      },0)
    }
    return result;
  }
};


