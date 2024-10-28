const sumAll = function(num1, num2) {
    /*
    //assume num2 > num1 to first get a general solution
    let totalSum = 0;
    while (num2 > num1 - 1) {
        totalSum += num2;
        num2--;
    }
    return totalSum;
    */

    //now if we don't assume num2 > num1

    lowerVal = Math.min(num1,num2);
    upperVal = Math.max(num1,num2);

    let totalSum = 0;
    while (upperVal > lowerVal - 1) {
        totalSum += upperVal;
        upperVal--;
    }
    return totalSum;
};


/* notes on solution provided:
    -summed upward, but uses similar idea
    -approached problem of param1>param2 by swapping values
    -first verified parameters were positive integers
*/

// Do not edit below this line
module.exports = sumAll;
