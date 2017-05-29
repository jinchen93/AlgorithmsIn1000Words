import VisualAlgorithm from '../visual_algorithm';

class VisualSort extends VisualAlgorithm {
  constructor(array) {
    super();
    this.originalArray(array);
    this.array = new Array(this.originalArray.length);
    for(let i=0;i<this.array.length;i++)
      this.array[i] = convertElement(this.originalArray[i]);
  }

  // override this method if you want more data in this object
  convertElement(el) {
    return {
      value: el,
      isVisited: false
    };
  }

  // always override this
  sort(){}

  pushVisit(array, ...indicies) {
    const cloned = this.cloneState(array);
    for(let i=0;i<indicies.length;i++)
      indicies[i].isVisited = true;
    this.pushState(cloned);
  }
}

export default VisualSort;
