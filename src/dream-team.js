const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    return members.filter(item => {
        if (typeof item === 'string') {
            return item;
        }
       }).map(item => item.trim()[0].toUpperCase()).sort().join('');
};
