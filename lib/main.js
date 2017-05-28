require('../sass/application.scss');
require('../sass/navbar.scss');

document.addEventListener("DOMContentLoaded", () => {
  let canvas = d3.select("svg")
    .attr("width", window.innerWidth - 270)
    .attr("height", window.innerHeight - 100);
  window.addEventListener("resize", () => {
    canvas.attr("width", window.innerWidth - 270)
    .attr("height", window.innerHeight - 100);
  });
  const controllers = {
    bst: new BstController()
  };

  const myTree = new BinaryTree();

});



const viewer = new TreeViewer(myTree);
viewer.update();
window.tree = myTree;
window.viewer = viewer;
