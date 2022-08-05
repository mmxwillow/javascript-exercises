const removeFromArray = function(arr, ...TheArgs) {
    for(const arg of TheArgs){
        for(let i=0; i<arr.length; i++){
            if(arr[i]===arg){
                arr.splice(i,1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
