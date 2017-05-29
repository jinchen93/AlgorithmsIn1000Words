import VisualAlgorithm from '../visual_algorithm';

class VisualSort extends VisualAlgorithm {
  constructor(arrayLength) {
    super();
    this.array = new Array(arrayLength);
    for(let i=0;i<this.array.length;i++)
      this.array[i] = this.convertElement(i);
  }

  /// An implementation of the fisher-yates shuffle
  shuffle() {
    let size = this.array.length;
    let rand;
    let temp;
    for (let i = 0; i < size; i += 1) {
      rand = Math.floor(i + Math.random() * (size - i));
      temp = this.array[rand];
      this.array[rand] = this.array[i];
      this.array[i] = temp;
    }
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

  // this stores the visit in a timeline
  pushVisit(array, ...indicies) {
    const cloned = this.cloneState(array);
    for(let i=0;i<indicies.length;i++)
      cloned[i].isVisited = true;
    this.pushState(cloned);
  }
}

export default VisualSort;
