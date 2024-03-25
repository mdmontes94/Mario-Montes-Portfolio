"use strict";
const select = selector => document.querySelector(selector);

var movesDiv = document.querySelector(".moves");

function getWarriorType()
{
    var warriorType = select("#type").value;

    return warriorType;
}

const createWarrior = () =>
{
    var newWarrior = new Warrior(getWarriorType());

    console.log(newWarrior);

    setTimeout (() => {
        newWarrior.buildWarrior();

    }, 2500);
}

select("#submit").addEventListener("click", createWarrior);