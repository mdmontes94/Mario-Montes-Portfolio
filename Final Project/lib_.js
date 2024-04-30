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
            
            var nameplate = document.createElement("p");
            nameplate.textContent = "Bluey";
            document.querySelector(this.cell).appendChild(nameplate);
        }
        else if(this.name == "Winton")
        {
            var picture = document.createElement("img");
            picture.src = "winton.png"
            document.querySelector(this.cell).appendChild(picture);
            
            var nameplate = document.createElement("p");
            nameplate.textContent = "Winton";
            document.querySelector(this.cell).appendChild(nameplate);
        }
        else if(this.name == "Indy")
        {
            var picture = document.createElement("img");
            picture.src = "indy.png"
            document.querySelector(this.cell).appendChild(picture);

            var nameplate = document.createElement("p");
            nameplate.textContent = "Indy";
            document.querySelector(this.cell).appendChild(nameplate);
        }
        else if(this.name == "Bingo")
        {
            var picture = document.createElement("img");
            picture.src = "bingo.png"
            document.querySelector(this.cell).appendChild(picture);

            var nameplate = document.createElement("p");
            nameplate.textContent = "Bingo";
            document.querySelector(this.cell).appendChild(nameplate);
        }
        else if(this.name == "Snickers")
        { 
            var picture = document.createElement("img");
            picture.src = "snickers.png"
            document.querySelector(this.cell).appendChild(picture);

            var nameplate = document.createElement("p");
            nameplate.textContent = "Snickers";
            document.querySelector(this.cell).appendChild(nameplate);
        }       
    }
}