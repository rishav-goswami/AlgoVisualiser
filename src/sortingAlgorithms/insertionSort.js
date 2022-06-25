export function getInsertionSortAnimations(array) {
  const animations = []; // its an List of both comparing indexes eg: [[i,j],[i,j]....]
  if (array.length <= 1) return array;

  insertionSortHelper(array, array.length, animations);
  return animations;
}

// Function to sort an array using insertion sort
function insertionSortHelper(arr, n, animations) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, i]);

      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, i]);


      animations.push([j + 1,arr[j],j,key]);
      arr[j + 1] = arr[j];
      arr[j] = key;
      j = j - 1;
    }
    
    
  }
}
