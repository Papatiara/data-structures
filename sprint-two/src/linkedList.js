var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //constant time O(1)
    var newTail = new Node(value);
    if (!list.head) {
      list.head = newTail;
    }
    if (list.tail) {
      list.tail.next = newTail;
    }
    list.tail = newTail;
  };

  list.removeHead = function() {
    //constant time O(1)
    let removedHead = list.head.value;
    if (list.head) {
      removedHead = list.head.value;
      delete list.head.value;
      list.head = list.head.next;
    } 
    return removedHead;
  };

  list.contains = function(target) {
    // linear time O(n)
    // It depends on how many nodes the list has
    if (list.head && list.head.value === target) {
      return true;
    } if (list.head && typeof list.head.next === 'number' && list.head.next.value === target) {
      return true;
    } if (list.tail && list.tail.value === target) {
      return true;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */