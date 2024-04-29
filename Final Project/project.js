"use strict";

const select = selector => document.querySelector(selector);

function chooseKid()
{
    var choice = select("#kid").value;

    return choice;
}

function choosePlacement()
{
    var placement = select("#cell").value;

    return placement;
}

const initialPosition = () =>
{
    var newKid = new Kid(chooseKid(), choosePlacement());

    newKid.buildKid();
    
};

const randomCell = () =>
{
    setTimeout (() => {
        var num = Math.floor(Math.random() * 9);
        var selection = document.getElementById("cell" + num);
        selection.style.backgroundColor = "red"; 
    }, 2000);
};

select("#submit").addEventListener("click", initialPosition);
select("#randomizer").addEventListener("click", randomCell);