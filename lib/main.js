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
  window.addEventListener("resize", () => application.resize());

  // Get links
  const options = document.getElementsByClassName("algorithm");
  for(let i=0;i<options.length;i++) {
    options[i].addEventListener("click", application.optionSelected);
  }
});

class MainApplicationController {
  constructor() {
    // Assume all controllers are common-controllers
    this.controllers = {
      bst: new BstController()
    };
    this.canvas = d3.select("svg");
    this.optionsPanel = document.getElementById("controls");

    this.active = this.controllers.bst;
    this.active.load(this.optionsPanel);
  }

  optionSelected(e) {
    e.preventDefault(); // Ensure re-direct is prevented

    const controllerKey = e.currentTarget.getAttribute("href").slice(1);
    if(this.controllers[controllerKey]) {
      this.active.unload();
      this.active = this.controllers[controllerKey];
      this.active.load(this.optionsPanel);
    }

    // Prevent re-direct again
    return false;
  }

  /// TODO: Fix resize, not working
  resize() {
    this.canvas
      .attr("width", window.innerWidth - 270)
      .attr("height", window.innerHeight - 100);
    this.active.resize();
  }
}
