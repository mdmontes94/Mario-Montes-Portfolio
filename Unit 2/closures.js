"use strict";

var movesDiv = document.querySelector(".moves");

function createPlayer(name, hp, ...moves)
{
    var name = name;
    var hp = hp;
    var moves = moves;

    return {
       getName()
       {
        return(name);
       },

       getHP()
       {
        return(hp);
       },

       appendMoves()
       {
        
        for(let move of moves)
        {
            var newParagraph = document.createElement("p");
            newParagraph.textContent = move;
    
            movesDiv.appendChild(newParagraph);
        }

       }
    };
}

var vanguardSpectre = createPlayer("Shepard", 500, "Biotic Charge", "Nova", "Incendiary Ammo");

vanguardSpectre.appendMoves();
console.log(vanguardSpectre.getName(), vanguardSpectre.getHP());

var wildWitch = createPlayer("Morrigan", 194, "Winter's Grasp", "Mind Blast", "Drain Life")

wildWitch.appendMoves();
console.log(wildWitch.getName(), wildWitch.getHP());

var consularScoundrel = createPlayer("Bindo", 80, "Rapid Shot", "Stasis Field", "Force Heal");

consularScoundrel.appendMoves();
console.log(consularScoundrel.getName(), consularScoundrel.getHP());
