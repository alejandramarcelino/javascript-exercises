const reverseString = function(string) {
    let reversedString = "";
    for (let i = 0; i < string.length; i++) {
        reversedString += string.at(-(i+1));
    }
    return reversedString;

    //solution provided:
    //return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
