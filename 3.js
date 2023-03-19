const input = [2,7,11,15];
const target = 9

function findTwoNumbers(numbers, target) {
    const numMap = new Map();
    for (let i = 0; i < numbers.length; i++) {
      const complement = target - numbers[i];
      if (numMap.has(complement)) {
        return [numMap.get(complement), i];
      }
      numMap.set(numbers[i], i);
    }
    return null;
  }

  findNumber = findTwoNumbers(input, target)
  console.log(findNumber);