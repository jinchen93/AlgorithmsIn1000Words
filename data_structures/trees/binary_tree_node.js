let INSTANCE_COUNTER = 0;
/**
  * Binary Tree is the father class of all trees within this file.
  * This class is responsible for interacting with all animations,
  */
class BstNode {
  /**
   * Node of the tree.
   *
   * @public
   * @constructor
   * @param {Number|String} value Value of the node.
   * @param {Node} left Left sibling.
   * @param {Node} right Right sibling.
   * @param {Node} parent Parent of the node.
   * @param {Number} height Height of the node.
   */
  constructor(value, left, right, parent) {
    this.value = value;
    this._left = left;
    this._right = right;
    this._parent = parent;
    this._instanceId = INSTANCE_COUNTER ++;
  }

  static createId() {
    const retVal = this._instanceId;
    this._instanceId++;
    return retVal;
  }
}

export default BstNode;
