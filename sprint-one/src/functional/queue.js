var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  let size = 0;

  someInstance.enqueue = function(value) {
    let count = size;
    let keys = Object.keys(storage).map(elem => Number(elem));
    if (keys.includes(size)) {
      count++;
      storage[count] = value;
    } else {
      storage[size] = value;
    }
    size++;
  };

  someInstance.dequeue = function() {
    let keys = Object.keys(storage).map(elem => Number(elem));
    let min = Math.min(...keys);
    let item = storage[min];
    delete storage[min];
    if (size > 0) {
      size--;
    } else {
      size = 0;
    }
    return item;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
