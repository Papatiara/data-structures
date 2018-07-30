var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  let size = 0;
  
  someInstance.push = function(value) {
    storage[size++] = value;
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--;
    } else {
      size = 0;
    }
    let item = storage[size];
    delete storage[size];
    return item;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
