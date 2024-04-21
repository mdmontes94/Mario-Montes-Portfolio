"use strict";

const select = selector => document.querySelector(selector);

class Leaf {

    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

var tree = new Leaf(65);

tree.left = new Leaf(36);
tree.right = new Leaf(142);

tree.left.left = new Leaf(30);
tree.left.left.left = new Leaf(25);
tree.left.left.right = new Leaf(28);
tree.left.right = new Leaf(34);

tree.right.left = new Leaf(103);
tree.right.right = new Leaf(124);
tree.right.right.right = new Leaf(116);
tree.right.right.left = new Leaf (110);


var depthArray = [];
var breadthArray = [];

function depthSearch(head) {
    if (head != null)
    {
        depthArray.push(head.value);
        
        depthSearch(head.left);
        depthSearch(head.right);
    }
}

function breadthSearch(head) {
    var queueArray = [];
    queueArray.push(head);

    while (queueArray.length > 0)
    {
        var currentLeaf = queueArray.shift();
        breadthArray.push(currentLeaf.value)

        if (currentLeaf.left != null)
        {
            queueArray.push(currentLeaf.left);
        }

        if (currentLeaf.right != null)
        {
            queueArray.push(currentLeaf.right);
        }
    }
}

depthSearch(tree);
breadthSearch(tree);

console.log(depthArray);
console.log(breadthArray);

const addBreadthArray = () =>
{
    select("#breadth").innerHTML = "Breadth Array: " + breadthArray;
};

const addDepthArray = () =>
{
    select("#depth").innerHTML = "Depth Array: " + depthArray;
};

select("#displayB").addEventListener("click", addBreadthArray);
select("#displayD").addEventListener("click", addDepthArray);