class CommonController {
  constructor(main) {
    this.main = main;

    this.canvas = d3.select("svg");
    this.resize();
    this.camera = canvas.append("g");
    this.canvas = this.camera.attr("transform", "translate(500, 40)");
  }

  load() {

  }

  unload() {
    
  }

  resize() {
    this.width = this.canvas.attr("width");
    this.height = this.canvas.attr("height");
  }
}
export default CommonController;
