// Time: O(n) || Space: O(1)
function CanplanceFlowersWorks(flowerbed, n) {
  if (flowerbed.length === 1 && flowerbed[0] === 0) return true;
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      i === 0 &&
      flowerbed[i] === 0 &&
      flowerbed.length > 1 &&
      flowerbed[i + 1] === 0
    ) {
      count++;
      i++;
    } else if (
      i === flowerbed.length - 1 &&
      flowerbed[i] === 0 &&
      flowerbed.length > 1 &&
      flowerbed[i - 1] === 0
    ) {
      count++;
    } else if (
      flowerbed.length > 2 &&
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      count++;
      i++;
    }

    if (n <= count) return true;
  }
  return n <= count;
}

// It works for middle case but corner case ([0,0,1,0,1]) it does not work
function CanplanceFlowers(flowerbed, n) {
  let highestEmpty = 0;
  let currentHighestEmpty = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      currentHighestEmpty++;
    } else {
      highestEmpty = Math.max(highestEmpty, currentHighestEmpty);
      currentHighestEmpty = 0;
    }
  }

  return highestEmpty >= n * 2 + 1;
}

//eslint-disable-next-line
export default { CanplanceFlowers, CanplanceFlowersWorks };
