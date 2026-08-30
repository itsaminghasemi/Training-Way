function firstUniqChar(inputString) {
  let resultMap = new Map();
  for (const character of inputString) {
    if (resultMap.has(character)) return character;
  }
}

console.log(firstUniqChar('leetcode'));
// Expected: 0 (Because 'l' is at index 0 and appears once)

console.log(firstUniqChar('loveleetcode'));
// Expected: 2 (Because 'v' is at index 2 and appears once)

console.log(firstUniqChar('aabb'));
// Expected: -1 (Because no character appears exactly once)
