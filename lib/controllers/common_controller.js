/// Pseudo-anonymous class. All empty functions inside this class must be
/// overloaded in their sub-classes.
const MAX = 8;
const MIN = .1;
class CommonController {
  constructor(main) {
    this.main = main;

    this.svg = d3.select("svg");
    this.canvas = this.svg.append("g");
    this.resize();
    this.zoom = d3.zoom()
      .scaleExtent([MIN, MAX])
      .on("zoom", this.zoomed.bind(this));
  }

  load(document) {
    this.resize();
  }

  unload() {

  }

  zoomFit(paddingPercent = .9, transitionDuration = 750) {
    const bbox = this.canvas.node().getBBox();
    var dx = bbox.width,
        dy = bbox.height,
        x = bbox.x + bbox.width / 2,
        y = bbox.y + bbox.height / 2,
        scale = Math.max(MIN, Math.min(MAX, paddingPercent / Math.max(dx / this.width, dy / this.height))),
        translate = [this.width / 2 - scale * x, this.height / 2 - scale * y];
    this.svg.transition()
      .duration(transitionDuration)
      .call(this.zoom.transform, d3.zoomIdentity.translate(translate[0],translate[1])
      .scale(scale));
  }

  zoomed() {
    this.canvas.attr("transform", d3.event.transform);
  }

  resize() {
    this.width = this.svg.attr("width");
    this.height = this.svg.attr("height");
  }
}
export default CommonController;
