var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  
  _.extend(newTree, treeMethods);
  return newTree;
};
 
var treeMethods = {}

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var wasFound = false;
  var rootNode = this;

  var findTarget = function(currNode){
    if (currNode.value === target) {
      wasFound = true;
    } else {
      for (var i = 0; i < currNode.children.length; i++) {
        findTarget(currNode.children[i]);
      }
    }
  }
  
  findTarget(rootNode);
  return wasFound
};


/*
 * Complexity: What is the time complexity of the above functions?
 */