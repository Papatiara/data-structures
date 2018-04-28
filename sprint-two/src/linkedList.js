var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

var values = [];

  list.addToTail = function(value) {  
    var newNode = Node(value);
   values.push(newNode.value);
    if(!list.head){ 
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
      list.head.next = newNode;
    }
  };

  list.removeHead = function() {
  if(list.head && list.head.next !== null){
   list.head = list.head.next;
  }
  if(values.includes(list.head.value)){
  values.shift();
}
return list.head.value;
};

  list.contains = function(target) {
    return values.includes(target);
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
