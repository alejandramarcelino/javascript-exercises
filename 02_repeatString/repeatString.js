const repeatString = function(string, num) {
    let newString = string;
    for (let i=1; i < num; i++) {
        newString = newString.concat(string);
    }
    return newString;
};

console.log(repeatString('hello',3));
// Do not edit below this line
module.exports = repeatString;
