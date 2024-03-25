"use strict";

class Warrior
{
    constructor(type)
    {
        this.type = type;
        this.hp = 0;
        this.initialMoveset = "";
    }

    buildWarrior()
    {
        if (this.type == "Barbarian")
        {
            this.hp = 12;
            this.initialMoveset = "Rage, Danger Sense, Reckless Attack";
            
            var profilePicture = document.createElement("img");
            profilePicture.src = "barbarian.png"
            movesDiv.appendChild(profilePicture);
            
            var warriorClass = document.createElement("p");
            warriorClass.textContent = "Barbarian";
            movesDiv.appendChild(warriorClass);
            
            var hp = document.createElement("p");
            hp.textContent = "HP: " + this.hp;
            movesDiv.appendChild(hp)

            var initialMoveset = document.createElement("p");
            initialMoveset.textContent ="Initial Moveset: " + this.initialMoveset;
            movesDiv.appendChild(initialMoveset);
        }
        else if(this.type == "Bard")
        {
            this.hp = 8;
            this.initialMoveset = "Charm Person, Cure Wounds, Comprehend Languages";
            
            var profilePicture = document.createElement("img");
            profilePicture.src = "bard.png"
            movesDiv.appendChild(profilePicture);
            
            var warriorClass = document.createElement("p");
            warriorClass.textContent = "Bard";
            movesDiv.appendChild(warriorClass);
            
            var hp = document.createElement("p");
            hp.textContent = "HP: " + this.hp;
            movesDiv.appendChild(hp);

            var initialMoveset = document.createElement("p");
            initialMoveset.textContent = "Initial Moveset: " + this.initialMoveset;
            movesDiv.appendChild(initialMoveset);
        }
        else if(this.type == "Paladin")
        {
            this.hp = 10;
            this.initialMoveset = "Bless, Detect Evil and Good, Divine Favor";
            
            var profilePicture = document.createElement("img");
            profilePicture.src = "paladin.png"
            movesDiv.appendChild(profilePicture);
            
            var warriorClass = document.createElement("p");
            warriorClass.textContent = "Paladin";
            movesDiv.appendChild(warriorClass);
            
            var hp = document.createElement("p");
            hp.textContent = "HP: " + this.hp;
            movesDiv.appendChild(hp);

            var initialMoveset = document.createElement("p");
            initialMoveset.textContent = "Initial Moveset: " + this.initialMoveset;
            movesDiv.appendChild(initialMoveset);
        }
        else if(this.type == "Ranger")
        {
            this.hp = 10;
            this.initialMoveset = "Hunter's Mark, Animal Friendship, Fog Cloud";
            
            var profilePicture = document.createElement("img");
            profilePicture.src = "ranger.png"
            movesDiv.appendChild(profilePicture);
            
            var warriorClass = document.createElement("p");
            warriorClass.textContent = "Ranger";
            movesDiv.appendChild(warriorClass);
            
            var hp = document.createElement("p");
            hp.textContent = "HP: " + this.hp;
            movesDiv.appendChild(hp);

            var initialMoveset = document.createElement("p");
            initialMoveset.textContent = "Initial Moveset: " + this.initialMoveset;
            movesDiv.appendChild(initialMoveset);
        }
        else if(this.type == "Warlock")
        {
            this.hp = 8;
            this.initialMoveset = "Hellish Rebuke, Mage Armor, Magic Missile";
            
            var profilePicture = document.createElement("img");
            profilePicture.src = "warlock.png"
            movesDiv.appendChild(profilePicture);
            
            var warriorClass = document.createElement("p");
            warriorClass.textContent = "Warlock";
            movesDiv.appendChild(warriorClass);
            
            var hp = document.createElement("p");
            hp.textContent = "HP: " + this.hp;
            movesDiv.appendChild(hp);

            var initialMoveset = document.createElement("p");
            initialMoveset.textContent = "Initial Moveset: " + this.initialMoveset;
            movesDiv.appendChild(initialMoveset);
        }       
    }
}