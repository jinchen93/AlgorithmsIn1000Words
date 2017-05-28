require('../sass/application.scss');
require('../sass/navbar.scss');

import BstController from './controllers/trees/bst_controller';

document.addEventListener("DOMContentLoaded", () => {
  // Init Controller
  const application = new MainApplicationController();
  // Set Initial size of canvas
  application.resize();
  // Canvas size changes when application resizes
  window.addEventListener("resize", application.resize());
});

class MainApplicationController {
  constructor() {
    // Assume all controllers are common-controllers
    this.commonControllers = {
      bst: new BstController()
    };
    this.currentController = controllers.bst;
    this.currentController.load();
  }
  resize() {
    canvas
      .attr("width", window.innerWidth - 270)
      .attr("height", window.innerHeight - 100);

  }
}
