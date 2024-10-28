const removeFromArray = function(array, ...args) {
/*
    for (let i = 0; i < arguments.length - 1; i++) {
        indexOfVal = array.indexOf(args[i]);
        array.splice(indexOfVal, 1);
    }
    return array;
*/

    //using the filter method, since it loops through array
    function notIncludedInArray(val) {
        return !args.includes(val);
    }
    return array.filter(notIncludedInArray);

   /* 
   notes on solution provided:
    -1st solution: used forEach to go through array,
        pushed elements not in args to new array
    -2nd solution: function defined on one line
        return array.filter(val => !args.includes(val));
        -almost the same as my second solution, except they used an arrow function
    */
};


// Do not edit below this line
module.exports = removeFromArray;
