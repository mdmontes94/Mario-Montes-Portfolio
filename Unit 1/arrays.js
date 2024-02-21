"use strict";

const values = [7, 8, 9, 88, 7, 66, 9];

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