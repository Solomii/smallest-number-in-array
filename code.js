let numberArray = [1, 3, 5, -1, 8, 9, -3];
document.getElementById("minNumber").innerHTML = myArrayMin(numberArray);
function myArrayMin(array) {
  if (array.length === 0) {
    return null;
  }
  let length = array.length;
  let min = Infinity;
  while (length--) {
    if (array[length] < min) {
      min = array[length];
    }
  }
  return min;
}
