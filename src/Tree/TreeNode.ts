export default class TreeNode {
    key: number;
    p1 = new Stack<string>();
    p2 = new Stack<string>();
    p3 = new Stack<string>();
    parent: TreeNode;
    children: TreeNode[];

    constructor(key,block11, block12, block13, block21,block22, block23,block31, block32, block33, parent, children) {
      this.key = key;
      this.p1.push(block11)
      this.p1.push(block12)
      this.p1.push(block13)

      this.p2.push(block21)
      this.p2.push(block22)
      this.p2.push(block23)

      this.p3.push(block31)
      this.p3.push(block32)
      this.p3.push(block33)
      this.parent = parent;
      this.children = children[] 
    }
  
    get isLeaf() {
      return this.children.length === 0;
    }
  
    get hasChildren() {
      return !this.isLeaf;
    }
}