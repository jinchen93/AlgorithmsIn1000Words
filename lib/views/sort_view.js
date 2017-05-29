class SortView {
  constructor(element) {
    this.element = element;
    element.innerHTML = (
      "<div class='fade-in'>" +
        "<button id='shuffle'>shuffle</button>" +
        "<button id='sort'>sort</button>" +
      "</div>"
    );
    this.shuffleBtn = document.getElementById("shuffle");
    this.sortBtn = document.getElementById("sort");
  }
}
export default SortView;
