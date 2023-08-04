// 1+2+3+4+5+6+7
function sumofNumbers(number){
    let sum=0;
for(let i=1;i<=number;number++){
    sum=sum+1;
    console.log(i,sum);
}
return sum;
}
const myNumbers=[1,2,3,5,7,6,9];
const oddNumbers=sumofNumbers(myNumbers);
console.log(oddNumbers);
