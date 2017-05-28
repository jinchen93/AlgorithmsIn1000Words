import merge from 'lodash/merge';

class VisualAlgorithm {
  constructor() {
    this.states = [];
  }

  pushState(state) {
    this.pushClonedState(merge({}, state));
  }

  pushClonedState(state) {
    this.states.push(state);
  }

  popState(state) {
    this.states.pop(state);
  }
}

export default VisualAlgorithm;
