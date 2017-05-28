import CommonController from '../common_controller';
import Vector from '../../utils/vector';

const GRID = new Vector(25, 60);
class TreeController extends CommonController{
  constructor(main) {
    super(main);
  }

  load(element) {
    this.update();
    this._loadControls(element);
    super.load(element);
  }

  _loadControls(element) {
    element.innerHTML = (
      "<div class='fade-in'>" +
        "<h4>Binary Tree</h4>" +
        "<input name='node'/>" +
        "<button name='add'>" +
          "<i class='fa fa-plus-circle' aria-hidden='true'></i>" +
        "</button>" +
        "<button name='remove'>" +
          "<i class='fa fa-minus-circle' aria-hidden='true'></i>" +
        "</button>" +
        "<button name='inorder'>inorder traversal</button>" +
        "<button name='inorder'>postorder traversal</button>" +
        "<button name='inorder'>preorder traversal</button>" +
      "</div>"
    );
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
