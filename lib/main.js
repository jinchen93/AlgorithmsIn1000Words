require('../sass/application.scss');

import BinaryTree from './data_structures/trees/binary_tree';
import BstNode from './data_structures/trees/binary_tree_node';
import Vector from './utils/vector';



var canvas = d3.select("svg");

const myTree = new BinaryTree();

const insertionBalanced = [6, 4, 8, 3, 5, 1, 2, 0, 7, 9, 4.5, 5.5, 3.4, 4.6];
const insertionMin = [0,1,2,3,4,5,6,7,8,9];
const insertionMax = [9,8,7,6,5,4,3,2,1,0];
for (var i = 0; i < insertionBalanced.length; i++) {
  myTree.insert(insertionBalanced[i]);
}

const GRID = 50;
class TreeViewer {
  constructor(tree) {
    this.canvas = d3.select("svg");
    this.tree = tree;
    this.width = canvas.attr("width");
    this.height = canvas.attr("height");
    this.root = d3.select("svg").append("g").attr("transform", `translate(${this.width/2},${this.height/2})`);
  }

  // start at end of array to idx 0. from the root go left if -1, right if 1.
  _getPosition(node) {
    let pos = new Vector();
    let answers = [];
    for(let parent = node._parent, curr = node; parent != null; curr = parent, parent = parent._parent) {
      answers.push(parent._right === curr ? 1 : -1);
    }
    console.log(answers);
  }
}

const myViewer = new TreeViewer(myTree);

window.tree = myTree;
window.viewer = myViewer;
console.log("hello!!");
