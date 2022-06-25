export function getBubbleSortAnimations(array) {
  const animations = []; // its an List of both comparing indexes eg: [[i,j],[i,j]....]
  if (array.length <= 1) return array;

  bubbleSortHelper(array, array.length, animations);
  return animations;
}

function bubbleSortHelper(arr, n,animations) {
  var i, j, temp;
  var swapped;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j, j+1]);

        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([j, j+1]);

        animations.push([j,arr[j + 1],j + 1,arr[j]]);
        
        // swap arr[j] and arr[j+1]
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // IF no two elements were
    // swapped by inner loop, then break
    if (swapped == false) break;
  }
}
