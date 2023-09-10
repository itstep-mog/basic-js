const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if(!Array.isArray(arr)) {
        throw new Error("Argument isn't array")
    }

    const nArr = [];
    const res = [];
    
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                if (arr[i + 1] == undefined) {
                    continue;
                }
                i++;
                nArr.push(' ');
                break;
            case '--discard-prev':
                if (arr[i - 1] == undefined) {
                    continue;
                }
                nArr.pop()
                nArr.push(' ');
                break;
            case '--double-next':
                if(arr[i + 1] == undefined) {
                    continue;
                }
                nArr.push(arr[i+1]);
                break;
            case '--double-prev':
                if(arr[i - 1] == undefined) {
                    continue;
                }
                nArr.push(nArr[nArr.length - 1]);
                break;
            default:
                nArr.push(arr[i]);
        }
    }
    nArr.filter(item => {
        if (item !== ' '){
           res.push(item)
        } 
    });
    return res;
};

