const sumAll = function(min, max) {
    let sum = 0
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if(min < max){
        let l = min
        let r = max
        for(var i = l; i <= r; i++){
            sum += i;
        }
    }
    else{
        l = max
        r = min
        for(var i = r; i >= l; i--){
            sum += i;
        }
    }
    return sum;
};
//sumAll(1, 4)  returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
