"use strict";

const select = selector => document.querySelector(selector);

class GraphNode {
    constructor(data)
    {
        this.data = data;
        this.edges = [];
    }

    connect(node)
    {
        this.edges.push(node)
        node.edges.push(this);
    }
}

var graph = [];

graph.push(new GraphNode(select("#cell1")));
graph.push(new GraphNode(select("#cell2")));
graph.push(new GraphNode(select("#cell3")));
graph.push(new GraphNode(select("#cell4")));
graph.push(new GraphNode(select("#cell5")));
graph.push(new GraphNode(select("#cell6")));
graph.push(new GraphNode(select("#cell7")));
graph.push(new GraphNode(select("#cell8")));
graph.push(new GraphNode(select("#cell9")));

graph[0].connect(graph[1]);
graph[1].connect(graph[2]);
graph[3].connect(graph[4]);
graph[4].connect(graph[5]);
graph[6].connect(graph[7]);
graph[7].connect(graph[8]);

graph[0].connect(graph[3]);
graph[1].connect(graph[4]);
graph[2].connect(graph[5]);
graph[3].connect(graph[6]);
graph[4].connect(graph[7]);
graph[5].connect(graph[8]);

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

const remainingPlayers = () =>
{
    var cellsWithPlayers = graph.filter(GraphNode => GraphNode.data.textContent.trim() != "");

    if(cellsWithPlayers.length == 1)
    {
        var winner = cellsWithPlayers[0].data.textContent.trim();
        window.alert(winner + " is the winner!");

        cellsWithPlayers[0].data.style.backgroundColor = "green";
    }
};

var removedCells = [];

const randomCell = () =>
{
    setTimeout (() => {
        var num; 
        do
        {
           num = Math.floor(Math.random() * 9);
        }
        while(removedCells.includes(num));

        var selection = document.getElementById("cell" + (num + 1));
        selection.style.backgroundColor = "red";

        var name = selection.textContent.trim();

        if(name != "")
        {
            window.alert("Oh no! " + name + " is out!");
            selection.textContent = "";
            graph.splice(num, 1);
            removedCells.push(num);

            for (let GraphNode of graph)
            {
                GraphNode.edges = GraphNode.edges.filter(edge => edge != graph[num]);

                GraphNode.edges = GraphNode.edges.filter(edge => !removedCells.includes(graph.indexOf(edge)));
            }
        }
        else
        {
            window.alert("Every one is safe! For now...");
        }

        remainingPlayers();
    }, 1000);
};

select("#submit").addEventListener("click", initialPosition);
select("#randomizer").addEventListener("click", randomCell);