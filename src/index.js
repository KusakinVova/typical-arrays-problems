
exports.min = function min (array) {
  if(array === undefined || array.length === 0) return 0;
  
  let min = '';
  for (let index = 0; index < array.length; index++) {
    if(min > array[index]) min = array[index];
  }
  return min;
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) return 0;

  let max = '';
  for (let index = 0; index < array.length; index++) {
    if(max < array[index]) max = array[index];
  }
  return max;
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) return 0;
  
  const count = array.length;
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum/count;
}
