function quickSort(arr, low, high) {
    if (low < high) {
        // Partition the array and get the pivot index
        let pi = partition(arr, low, high);

        // Recursively sort the elements before and after the partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    // Choose the pivot (the last element in this case)
    let pivot = arr[high];

    // Index of smaller element
    let i = low - 1;

    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to the pivot
        if (arr[j] <= pivot) {
            i++;

            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Swap arr[i + 1] and arr[high] (put the pivot in its correct position)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
}

// Example usage
let unsortedArray = [10, 7, 8, 9, 1, 5];
let n = unsortedArray.length;

console.log("Unsorted Array:", unsortedArray);

quickSort(unsortedArray, 0, n - 1);

console.log("Sorted Array:", unsortedArray);
// Expected output: [1, 5, 7, 8, 9, 10]