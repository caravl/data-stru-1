function Queue() {
  this.arr = [];
  this.head = 0;
  this.tail = 0;
  this.enqueue = function(val) {
    //adds val to end of arr
    this.arr[this.tail] = val;
    this.tail++;
  };
  this.dequeue = function() {
    //removes first el of arr
    if (this.tail) {
      var toRemove = this.arr[this.head];
      var newArr = [];
      var i = 1;
      while (this.arr[i]) {
        newArr[i-1] = this.arr[i];
        i++;
      }
      this.arr = newArr;
      //decrement tail
      this.tail--;
      return toRemove;
    }
    return undefined;
  };
  this.size = function() {
    //returns arr length
    return this.tail;
  };
}

