import TreeController from './tree_controller';
import BinaryTree from '../../models/trees/binary_tree';
import BinaryTreeNode from '../../models/trees/binary_tree_node';

class BstController extends TreeController {
  constructor(main) {
    super(main); // <-- ha, kinda like superman...
    this.tree = new BinaryTree();
  }

  load(element) {
    const insertionBalanced = [6, 4, 8, 3, 5, 1, 7, 9, 4.5, 5.5, 3.4];
    const insertionMin = [0,1,2,3,4,5,6,7,8,9];
    const insertionMax = [9,8,7,6,5,4,3,2,1,0];
    for (var i = 0; i < insertionBalanced.length; i++)
      this.tree.insert(insertionBalanced[i]);
    super.load(element);
  }

  unload() {
    if(this.tree._root)
      this.tree.remove(_root);
    super.unload();
  }
}
export default BstController;
