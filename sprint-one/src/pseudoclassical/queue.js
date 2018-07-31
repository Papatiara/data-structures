var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this._size = 0;
};

Queue.prototype.enqueue = function(value) {
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

Queue.prototype.dequeue = function() {
  if (this._size > 0) {
    this._size--;
  } else {
    this._size = 0;
  }
  var keys = Object.keys(this.storage).map(elem => Number(elem));
  var min = Math.min(...keys);
  var item = this.storage[min];
  delete this.storage[min];
  return item;
};

Queue.prototype.size = function() {
  return this._size;
};


