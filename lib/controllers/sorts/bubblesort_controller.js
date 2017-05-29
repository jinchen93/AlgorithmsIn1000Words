import SortController from './sort_controller';

class BubbleSortController extends SortController {
  constructor(main) {
    super(main);
    this.sorter = new BubbleSort(50);
  }

  load(element) {
    super.load(element);
  }

  unload() {
    super.unload();
  }
}

export default BubbleSortController;
