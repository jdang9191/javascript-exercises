const reverseString = function(word) {
    let r = word.length - 1;
    let returnString = "";
    while(r >= 0){
        returnString += word[r];
        r--;
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;




/*
hello

separate int gets p
h goes to p's place

*/