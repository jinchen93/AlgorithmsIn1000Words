import SortView from '../../views/sort_view';

class SortController {

  constructor(main) {
    super(main);
    this.buttonClick = this.buttonClick.bind(this);
  }

  load() {
    this.update();
    this.view = new SortView();
    this.view.shuffleBtn.addEventListener("click", this.buttonClick);
    this.view.sortBtn.addEventListener("click", this.buttonClick);
  }

  buttonClick(e) {
    const clicked = e.currentTarget;
    if(clicked === this.view.shuffleBtn) {
      this.sorter.shuffle();
    } else if(clicked == this.view.sortBtn) {
      this.sorter.sort();
    }
    this.update();
  }

  unload() {

  }
}
export default SortController;
