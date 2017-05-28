require('../sass/application.scss');

import BinaryTree from './data_structures/trees/binary_tree';
import BstNode from './data_structures/trees/binary_tree_node';
import Vector from './utils/vector';



var canvas = d3.select("svg");

const myTree = new BinaryTree();

const insertionBalanced = [6, 4, 8, 3, 5, 1, 7, 9, 4.5, 5.5, 3.4];
const insertionMin = [0,1,2,3,4,5,6,7,8,9];
const insertionMax = [9,8,7,6,5,4,3,2,1,0];
for (var i = 0; i < insertionBalanced.length; i++) {
  myTree.insert(insertionBalanced[i]);
}

const GRID = new Vector(25, 60);
class TreeViewer {
  constructor(tree) {
    this.tree = tree;
    this.canvas = d3.select("svg");
    this.width = this.canvas.attr("width");
    this.height = this.canvas.attr("height");
    this.canvas = canvas.append("g").attr("transform", "translate(500, 40)");
  }

  update() {

    const nodes = this.canvas.selectAll("g")
      .data(this.getData(), (d) => d._instanceId);

    const t = d3.transition()
    .duration(5000);

    nodes.exit()
      .attr("class", "exit")
      .transition(t)
      .attr("y", 60)
      .style("fill-opacity", 1e-6)
      .remove();

    // flag updated elements
    nodes.attr("class", "node")

    // flag and append updated elements' circles
    const enters = nodes.enter().append("g")
      .attr("class", "node enter")


      enters.append("circle")
      .attr("r", 25);
    // add text to those circles
    enters.append("text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text(n => n.value);

    // both updated and entering nodes should reassign their positions
    enters.merge(nodes)
      .attr("transform", n => {
        const pos = this.getPosition(n);
        return `translate(${pos.x}, ${pos.y})`
      });

    // exiting nodes should leave
    nodes.exit().remove();
  }

  getPosition(node) {
    return new Vector(node._position).times(GRID);
  }

  getData() {
    this.tree.reposition();
    const data = [];
    this.tree.inorder((el) => data.push(el));
    return data;
  }
}

const viewer = new TreeViewer(myTree);
viewer.update();
window.tree = myTree;
window.viewer = viewer;