function LinkedList() {
  this.head = undefined;
  this.tail = undefined;

  this.addToHead = function(value) {
    var node = new Node(value);
      node.previous = null;
    if (this.head) {
      this.head.previous = node;
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
  };

  this.addToTail = function(value) {
    var node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
      node.previous = this.tail;

    } else {
      node.previous = null;
      this.head = node;
    }
    node.next = null;
    this.tail = node;
  };

  this.removeHead = function() {
    if (!this.head) {
      return undefined;
    }
    var toRemove = this.head;

    if (toRemove.next) {
      this.head = toRemove.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return toRemove.value;
  };

    this.search = function(value) {
      console.log(this)
      // if node.value === value return value
  };

  this.removeTail = function() {
    if (!this.tail) {
      return undefined;
    }
    var toRemove = this.tail;
    if (toRemove.previous) {
      console.log('toRemove.previous: ', toRemove.previous)
      this.tail = toRemove.previous;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return toRemove.value;
  };
}

function Node(val) {
  this.previous = null;
  this.next = null;
  this.value = val;
}
