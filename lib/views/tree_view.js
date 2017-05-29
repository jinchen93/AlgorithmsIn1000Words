class TreeView {
  constructor(element) {
    this.element = element;
    element.innerHTML = (
      "<div class='fade-in'>" +
        "<input id='tree-input' name='node'/>" +
        "<button id='tree-add' name='add'>" +
          "<i class='fa fa-plus-circle' aria-hidden='true'></i>" +
        "</button>" +
        "<button id='tree-remove' name='remove'>" +
          "<i class='fa fa-minus-circle' aria-hidden='true'></i>" +
        "</button>" +
        "<button id='tree-inorder' name='inorder'>inorder traversal</button>" +
        "<button id='tree-postorder' name='postorder'>postorder traversal</button>" +
        "<button id='tree-preorder' name='preorder'>preorder traversal</button>" +
      "</div>"
    );
    this.input = document.getElementById("tree-input");
    this.addButton = document.getElementById("tree-add");
    this.removeButton = document.getElementById("tree-remove");
    this.preorder =  document.getElementById("tree-preorder");
    this.postorder =  document.getElementById("tree-postorder");
    this.inorder =  document.getElementById("tree-inorder");
  }
}
export default TreeView;
