import merge from 'lodash/merge';

class VisualAlgorithm {
  constructor() {
    this.states = [];
  }

  pushState(state) {
    this.states.push(state);
  }

  pushClonedState(state) {
    this.pushClonedState(merge({}, state));
  }

  popState(state) {
    this.states.pop(state);
  }

  cloneState(state) {
    return merge({}, state);
  }
}

export default VisualAlgorithm;
