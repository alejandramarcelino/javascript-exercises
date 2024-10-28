const leapYears = function(year) {
    // divisible by four, NOT divisible by 100 unless divisible by 400

    // will do == instead of === to allow year to be entered as a string
    /*
    if ((year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
    */

    //logically equivalent
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
};

/* notes on solution provided:
    -used === instead, restricts type
    -defined conditions outside if-else, stored in variables
*/ 


// Do not edit below this line
module.exports = leapYears;
