"use strict";

class Kid
{
    constructor(name, cell)
    {
        this.name = name;
        this.cell = cell;
    }

    buildKid()
    {
        if (this.name == "Bluey")
        {
            var picture = document.createElement("img");
            picture.src = "bluey.png"
            document.querySelector(this.cell).appendChild(picture);
            
            /*var warriorClass = document.createElement("p");
            warriorClass.textContent = "Barbarian";
            movesDiv.appendChild(warriorClass);*/
        }
        else if(this.name == "Winton")
        {
            var picture = document.createElement("img");
            picture.src = "winton.png"
            document.querySelector(this.cell).appendChild(picture);
            
            /*var warriorClass = document.createElement("p");
            warriorClass.textContent = "Bard";
            movesDiv.appendChild(warriorClass);*/
        }
        else if(this.name == "Indy")
        {
            var picture = document.createElement("img");
            picture.src = "indy.png"
            document.querySelector(this.cell).appendChild(picture);
            
            /*var warriorClass = document.createElement("p");
            warriorClass.textContent = "Paladin";
            movesDiv.appendChild(warriorClass);*/
        }
        else if(this.name == "Bingo")
        {
            var picture = document.createElement("img");
            picture.src = "bingo.png"
            document.querySelector(this.cell).appendChild(picture);
            
            /*var warriorClass = document.createElement("p");
            warriorClass.textContent = "Ranger";
            movesDiv.appendChild(warriorClass);*/
        }
        else if(this.name == "Snickers")
        { 
            var picture = document.createElement("img");
            picture.src = "snickers.png"
            document.querySelector(this.cell).appendChild(picture);
            
            /*var warriorClass = document.createElement("p");
            warriorClass.textContent = "Warlock";
            movesDiv.appendChild(warriorClass);*/
        }       
    }
}