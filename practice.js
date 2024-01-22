"use strict";

/*

Name: Mario Montes
Date: 01/21/24

*/

var noise = prompt("What is your favorite 'background noise' TV show or movie?");

console.log("The noise variable is equal to: \n " + noise);

var int = 75;

int = int * 5;

console.log("The int variable is equal to: " + int);

let int2 = 7;
for(let i = 1; i <= 5; i++)
{
    if (int2 % 2 != 0)
    {
        console.log(int2);
    }
    
    int2 ++;
}
