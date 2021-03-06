import VisualSort from './visual_sort';

class BubbleSort extends VisualSort {
  sort() {
    const array = this.array;
    // Store array state
    this.pushState(array);
    let temp;
    for (let i = 0; i < array.length; i += 1) {
      for (let j = i; j > 0; j -= 1) {
        // for every visit, push the visit
        this.pushVisit(array, i, j);
        if (array[j] < array[j - 1]) {
          temp = array[j];
          array[j] = array[j - 1];
          array[j - 1] = temp;
          // if there was a correction, push the new state
          this.pushVisit(array, i, j);
        }
      }
    }
  }
}

export default BubbleSort;
