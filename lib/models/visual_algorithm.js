import merge from 'lodash/merge';

/// Visual Algorithm is kinda like a queue
/// It is responsible for displaying the algorithm's history over time
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
    this.states.shift(state);
  }

  cloneState(state) {
    return merge({}, state);
  }
}

export default VisualAlgorithm;
