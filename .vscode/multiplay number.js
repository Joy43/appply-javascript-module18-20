function multiplicationofNumber(number)
{
    let result=1;
    
        for (let i = 1; i < number; i++) {
           result =result*i;
            
        }
        return result;
    }
   

const result =multiplicationofNumber(9);
console.log(result);