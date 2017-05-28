class TreeView {
  constructor(element) {
    this.element = element;
    element.innerHTML = (
      "<h4>Binary Tree</h4>" +
      "<input id='tree-input' name='node'/>" +
      "<button id='tree-add' name='add'>" +
        "<i class='fa fa-plus-circle' aria-hidden='true'></i>" +
      "</button>" +
      "<button id='tree-remove' name='remove'>" +
        "<i class='fa fa-minus-circle' aria-hidden='true'></i>" +
      "</button>" +
      "<button id='tree-inorder' name='inorder'>inorder traversal</button>" +
      "<button id='tree-inorder' name='postorder'>postorder traversal</button>" +
      "<button id='tree-preorder' name='preorder'>preorder traversal</button>"
    );
    this.input = document.getElementById("tree-input");
    this.addButton = document.getElementById("tree-add");
    this.removeButton = document.getElementById("tree-remove");
  }
}
