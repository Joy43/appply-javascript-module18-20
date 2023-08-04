function isLeapYear(year){
    const reminder=year%4;
    if (reminder==0) {
        // console.log('year is leap year',year);
       return true;
    }
    else{
        // console.log('year is a not a leap year');
        return false;
    }
}

// isLeapYear(1993);
const isMyear=isLeapYear(2020);
console.log('my year',isMyear);