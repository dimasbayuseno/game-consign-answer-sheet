function DiamondPattern(size) {
    // check if size is odd
    if (size % 2 === 0) {
      size++;
    }
  
    for (let i = 1; i <= size; i += 2) {
      let pattern = "";
      for (let j = 1; j <= size - i; j += 2) {
        pattern += "*";
      }
      for (let j = 1; j <= i; j++) {
        pattern += "#";
      }
      for (let j = 1; j <= size - i; j += 2) {
        pattern += "*";
      }
      console.log(pattern);
    }
  
    for (let i = size - 2; i >= 1; i -= 2) {
      let pattern = "";
      for (let j = 1; j <= size - i; j += 2) {
        pattern += "*";
      }
      for (let j = 1; j <= i; j++) {
        pattern += "#";
      }
      for (let j = 1; j <= size - i; j += 2) {
        pattern += "*";
      }
      console.log(pattern);
    }
    console.log("note: if input even then there'll be an increment");
  }
  
  // call the function with size 5
  DiamondPattern(5);