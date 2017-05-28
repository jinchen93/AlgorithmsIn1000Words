require('../sass/application.scss');
require('../sass/navbar.scss');
require('../sass/slider.scss');

import BstController from './controllers/trees/bst_controller';

document.addEventListener("DOMContentLoaded", () => {
  // Init Controller
  const application = new MainApplicationController();
  // Set Initial size of canvas
  application.resize();
  // Canvas size changes when application resizes
  window.addEventListener("onskldjresize", application.resize());
});

class MainApplicationController {
  constructor() {
    // Assume all controllers are common-controllers
    this.controllers = {
      bst: new BstController()
    };
    this.canvas = d3.select("svg");

    this.active = this.controllers.bst;
    this.active.load();
  }
  resize() {
    this.canvas
      .attr("width", window.innerWidth - 270)
      .attr("height", window.innerHeight - 100);
  }
}
