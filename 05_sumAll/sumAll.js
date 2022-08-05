const sumAll = function (arg1, arg2) {
    if (typeof (arg1) != "number" || typeof (arg2) != "number" ||
        arg1 < 0 || arg2 < 0) {
        return "ERROR";
    }
    if(arg2 < arg1){
        [arg1, arg2] = [arg2, arg1];
    }
    let sum = 0;
    for (; arg1 <= arg2; arg1++) {
        sum += arg1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
