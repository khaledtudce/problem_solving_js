// Time: O(n) || Space: O(n) || 1 ms
function uniqueOccurences(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let map = new Map();
  for (let i = 0; i < sortedArr.length; i++) {
    if (map.has(sortedArr[i])) {
      map.set(sortedArr[i], map.get(sortedArr[i]) + 1);
    } else {
      map.set(sortedArr[i], 1);
    }
  }

  //const set = new Set(map.values());
  const set = new Set();
  /*for (const [key, value] of map) {
    set.add(value);
  }  or
    map.forEach((key, value) => {
    set.add(value);
  });*/
  map.forEach((value) => {
    set.add(value);
  });

  return map.size === set.size;
}

// Time: O(n) || Space: O(n) || 1 ms
function uniqueOccurencesBetterSyntax(arr) {
  let countMap = new Map();
  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  const occurrencesSet = new Set(countMap.values());
  return countMap.size === occurrencesSet.size;
}

export default { uniqueOccurences, uniqueOccurencesBetterSyntax };
