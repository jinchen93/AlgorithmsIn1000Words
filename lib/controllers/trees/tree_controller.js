import CommonController from '../common_controller';
import Vector from '../../utils/vector';
import TreeView from '../../views/tree_view';

const GRID = new Vector(25, 60);
class TreeController extends CommonController{
  constructor(main) {
    super(main);
    this.buttonClick = this.buttonClick.bind(this);
  }

  load(element) {
    this.update();
    this.view = new TreeView(element);
    this.view.addButton.addEventListener("click", this.buttonClick);
    this.view.removeButton.addEventListener("click", this.buttonClick);
    this.view.preorder.addEventListener("click", this.buttonClick);
    this.view.postorder.addEventListener("click", this.buttonClick);
    this.view.inorder.addEventListener("click", this.buttonClick);
    super.load(element);
  }

  buttonClick(e) {
    const btn = e.currentTarget;
    if(btn === this.view.addButton) {
      const v = this.view.input.value;
      this.view.input.value = "";
      this.tree.insert(v);
    } else if(btn === this.view.removeButton) {
      const v = this.view.input.value;
      this.tree.remove(this.tree.find(v));
      this.view.input.value = "";
    }
    this.update();
    this.zoomFit();
  }

  update() {
    const nodes = this.canvas.selectAll("g")
      .data(this.getData(), (d) => d._instanceId);

    const t = d3.transition()
    .duration(500);

    nodes.exit()
      .attr("class", "node exit")
      .attr("transform", n => {
        const pos = this.getPosition(n);
        return `translate(${pos.x}, ${pos.y+70})`;
      })
      .style("opacity", 1e-6)
      .remove();

    // flag updated elements
    nodes.attr("class", "node update")
      .style("opacity", 1)
      .transition(t)

    // flag and append updated elements' circles
    const enters = nodes.enter().append("g")
      .attr("class", "node enter");


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
        return `translate(${pos.x}, ${pos.y})`;
      });
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
export default TreeController;
