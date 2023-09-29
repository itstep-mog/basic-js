const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let res = backyard.join(',').split(',').reduce((acc, item) => {
        if (item === '^^') {
            acc++;
        }
        return acc;
    }, 0);
    return res;
};
