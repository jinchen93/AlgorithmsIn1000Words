/// Pseudo-anonymous class. All empty functions inside this class must be
/// overloaded in their sub-classes.
class CommonController {
  constructor(main) {
    this.main = main;

    this.canvas = d3.select("svg");
    this.resize();
    this.camera = this.canvas.append("g");
    this.canvas = this.camera.attr("transform", "translate(500, 40)");
  }

  load(document) {
    this.resize();
  }

  unload() {

  }

  resize() {
    this.width = this.canvas.attr("width");
    this.height = this.canvas.attr("height");
  }
}
export default CommonController;
