const reverseString = function(original) {
    let array = original.split("");
    let arrlength = array.length;
    let reversed = "";
    for(;arrlength>0;arrlength--){
        reversed += array[arrlength-1];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
