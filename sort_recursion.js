/**
 * Recursive sorting algorithm
 * 
 * @param {*} arr 
 * @param {*} startIndex 
 * @returns 
 */
function sortRecursion(arr, startIndex) {
    if (startIndex == arr.length) {
        return arr;
    }

    let min = arr[startIndex];
    let index = startIndex;
    for (let i = startIndex; i < arr.length; i++) {
        if (min < arr[i]) {
            min = arr[i];
            index = i;
        }
    }
    let temporary = min;
    arr[index] = arr[startIndex];
    arr[startIndex] = temporary;

    return (sortRecursion(arr, startIndex + 1));
}
let arr = [3, 1, 5, 8, 4, 2, 5];
let startIndex = 0;
console.log(sortRecursion(arr, startIndex));