class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {

    this.storage = {};
    this._size = 0;
  }
 
  push(value) {
    this.storage[this._size] = value;
    this._size++;
  }

  pop() {
    if (this._size > 0) {
      this._size--;
    } else {
      this._size = 0;
    } 

    var item = this.storage[this._size];
    delete this.storage[this._size];
    return item;
  }

  size() {
    return this._size;
  }
}