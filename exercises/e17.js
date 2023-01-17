export function minBy(array, cb) {
  let minValue = 99;
  let minElement;
  for (let i = 0; i < array.length; i++) {
    let value = cb(array[i]);
    if (value < minValue) {
      minValue = value;
      minElement = array[i];
    }
  }
  return minElement;
}

export function maxBy(array, cb) {
  let maxValue = -99;
  let maxElement;
  for (let i = 0; i < array.length; i++) {
    let value = cb(array[i]);
    if (value > maxValue) {
      maxValue = value;
      maxElement = array[i];
    }
  }
  return maxElement;
}
