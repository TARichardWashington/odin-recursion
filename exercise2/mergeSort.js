var arrayToSort = [10, 1, 15, 80, 67, 76, 105, 96, 76, 73, 2, 11];

function mergeSort(unsortedArray) {

    // Base case, if there is a single element it is already sorted
    if (unsortedArray.length === 1) {
        return unsortedArray;
    }

    // Other wise split the array into two halves
    let left = unsortedArray.slice(0, Math.floor(unsortedArray.length / 2));
    let right = unsortedArray.slice(Math.floor(unsortedArray.length / 2));

    // Then sort them (recursion!)
    left = mergeSort(left);
    right = mergeSort(right);

    // Then merge the results - this bit is a bit tricky...
    let sortedArray = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left[0]);
            left.shift();
        } else {
            sortedArray.push(right[0]);
            right.shift();
        }
    }

    // if we have values left over on the left or right 
    // they must already be sorted so we can tack them on
    while (left.length) {
        sortedArray.push(left.shift());
    }

    while (right.length) {
        sortedArray.push(right.shift());
    }

    return sortedArray;
}

var sortedArray = mergeSort(arrayToSort);

console.log(sortedArray);