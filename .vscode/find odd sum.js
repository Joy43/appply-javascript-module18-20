// function getSum (numbers){
//     let sum=0;
//   for(let i=0; i<numbers.length;i++){
//     const index=i;
//     const element=numbers[index];
//     sum=sum+element;
//     console.log(index,element,sum);
//   }
// return sum;
// }

function getOddnumbersofArry(numbers){
    const oddNumbers=[];
for (let i = 0; i < numbers.length; i++) {
    const index=i;
    const element=numbers[index];
    if(element%2!==0){
        console.log(index,element);
        oddNumbers.push(element);
    }
    
}
return oddNumbers;

}

const myNumbers=[12,65,78,32,45,91];
const oddNumbers=getOddnumbersofArry(myNumbers);
const oddNumberssum=getOddnumbersofArry(oddNumbers);
console.log('odd number sum',oddNumbers);
// getSum(myNumbers);
// getOddnumbersofArry(myNumbers);