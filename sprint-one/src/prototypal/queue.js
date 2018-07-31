var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance._size = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var count = this._size;
  var keys = Object.keys(this.storage).map(elem => Number(elem));
  if (keys.includes(this._size)) {
    count++;
    this.storage[count] = value;
  } else {
    this.storage[this._size] = value;
  }
  this._size++;
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this.storage).map(elem => Number(elem));
  var min = Math.min(...keys);
  var item = this.storage[min];
  delete this.storage[min];
  if (this._size > 0) {
    this._size--;
  } else {
    this._size = 0;
  }
  return item;
};

queueMethods.size = function() {
  return this._size;
};