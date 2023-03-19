const words = ['kita','‘kau', 'atik', 'tika', 'aku', 'kia', 'makan', 'gameconsign', 'kua']

function groupAnagrams(words) {
  const groups = {};
  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (groups[sortedWord]) {
      groups[sortedWord].push(word);
    } else {
      groups[sortedWord] = [word];
    }
  }
  return Object.values(groups);
}

const anagram = groupAnagrams(words)
console.log(anagram);