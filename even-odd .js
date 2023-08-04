// console.log(4/2);
function isEven(number){
    const reminder=number%2;
    // console.log(reminder);
    if (reminder===0){
        // console.log('number is even')
return true;
    }
    else{
        // console.log('number is odd')
        return false;
    }
}
// isEven(330);
const myEvennumbers=isEven(303);
console.log(myEvennumbers);