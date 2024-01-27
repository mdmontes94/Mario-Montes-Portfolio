"use strict";

const values = [7, 77, 8, 88, 9, 99, 6];

const expression = function(num) 
{
    num++;

    console.log(num);  
};

function processWithExpression (funct, num)
{
    if (num % 2 == 0)
    {
        funct(num);
    }
    else{
        console.log("The number is odd.");
    }
}

for(let i in values)
{
    processWithExpression(expression, values[i]);
}