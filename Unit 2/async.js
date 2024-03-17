"use strict";

async function createRace()
{
    var runner1 = false;
    var runner2 = false;

    var loser = "";

    var runner1Go = new Promise((resolve) => 
    {
        setTimeout (() => {
            loser = "runner1";
            resolve(true);

        },  3000);
    });

    var runner2Go = new Promise((resolve) => 
    {
        setTimeout (() => {
            loser = "runner2"
            resolve(true);

        }, 1000);
    });

    runner1 = await runner1Go;
    runner2 = await runner2Go;

    var results = [runner1, runner2, loser]

    return(results);
}

createRace().then((results) =>
{
    console.log("Loser: ", results[2]);

    var newParagraph = document.createElement("p");
    newParagraph.textContent = "Winner: runner2"

    document.querySelector("#winner").appendChild(newParagraph);
});
