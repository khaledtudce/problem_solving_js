function stack(stackOperation, stackValue) {
  var stackHolder = {
    count: 3, // Current top index of the stack
    storage: [1, { id: 1, value: "obj" }, "stringHolder", 46],
  };

  var push = function (value) {
    stackHolder.count++;
    stackHolder.storage[stackHolder.count] = value;
    return stackHolder.storage;
  };

  var pop = function () {
    if (stackHolder.count > 0) {
      stackHolder.storage.splice(stackHolder.count, 1);
      stackHolder.count--;
    }
    return stackHolder.storage;
  };

  var peek = function () {
    if (stackHolder.count > 0) {
      return stackHolder.storage[stackHolder.count];
    }
    return [];
  };

  var swap = function () {
    if (stackHolder.count >= 1) {
      [
        stackHolder.storage[stackHolder.count],
        stackHolder.storage[stackHolder.count - 1],
      ] = [
        stackHolder.storage[stackHolder.count - 1],
        stackHolder.storage[stackHolder.count],
      ];
    }
    return stackHolder.storage;
  };

  // Main function logic to handle stack operations
  switch (stackOperation) {
    case "push":
      return push(stackValue);
    case "pop":
      return pop();
    case "peek":
      return peek(); // Return as array
    case "swap":
      return swap();
    default:
      return stackHolder.storage; // Return the stack as is for unrecognized operations
  }
}

//eslint-disable-next-line
export default { stack };
