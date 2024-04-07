"use strict";

const select = selector => document.querySelector(selector);

let values = [];

function update()
{
    var outputParagraph = select("#output");

    outputParagraph.innerHTML = values.reduce((total, value, index) =>{
        return total + "<br>" + (index + 1) + ". " + value;
    }, '');

    select("#input").value = "";
}

function pushToArray()
{
    var input = select("#input").value;
    
    values.push(input);
    update();
}

function popFromArray()
{
    values.pop();

    update();
}

function unshiftToArray()
{
    var input = select("#input").value;
    
    values.unshift(input);
    update();
}

function shiftFromArray()
{
    values.shift();

    update();
}

function arrMap()
{
    var input = select("#input").value;

    values = values.map(value  => input + value);

    update();
}

select("#push").addEventListener("click", pushToArray);
select("#pop").addEventListener("click", popFromArray);
select("#unshift").addEventListener("click", unshiftToArray);
select("#shift").addEventListener("click", shiftFromArray);
select("#map").addEventListener("click", arrMap);
