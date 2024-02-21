"use strict";

var containerDiv = document.querySelector("#container");

const addText = () => 
{
    for (let i = 1; i <= 5; i++)
    {
        var newParagraph = document.createElement("p");
        newParagraph.textContent = "Family";

        containerDiv.appendChild(newParagraph);
    }
};

const changeBackground = () => 
{
    document.body.style.backgroundColor = "red";

    containerDiv.style.backgroundColor = "blue";

    containerDiv.style.color = "white";
};

document.querySelector("#add").addEventListener("click", addText);

document.querySelector("#change").addEventListener("click", changeBackground);