// Write a JavaScript program to sort a list of elements using Heap sort.

/* Heapsort is a comparison-based sorting algorithm. 
Heapsort can be thought of as an improved selection sort.
Heapsort is an in-place algorithm, but it is not a stable sort. */

// Solution: 

function heapSort(arr) {
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, 0, i);
    }
  }
  
  function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, i, n);
    }
  }
  
  function heapify(arr, rootIndex, heapSize) {
    const leftChildIndex = 2 * rootIndex + 1;
    const rightChildIndex = 2 * rootIndex + 2;
    let largestIndex = rootIndex;
  
    if (leftChildIndex < heapSize && arr[leftChildIndex] > arr[largestIndex]) {
      largestIndex = leftChildIndex;
    }
  
    if (rightChildIndex < heapSize && arr[rightChildIndex] > arr[largestIndex]) {
      largestIndex = rightChildIndex;
    }
  
    if (largestIndex !== rootIndex) {
      [arr[rootIndex], arr[largestIndex]] = [arr[largestIndex], arr[rootIndex]];
      heapify(arr, largestIndex, heapSize);
    }
  }
  
  const unsortedArray = [5, 9, 2, 6, 3, 1, 7, 4, 8];
  heapSort(unsortedArray);
  console.log(unsortedArray);
  