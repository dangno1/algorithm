/**
 * Algorithm to find largest number in array
 * 
 * @param {*} arr 
 * @returns 
 */
function maxSort(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
let arr = [3, 1, 5, 8, 4, 2, 5];
console.log(maxSort(arr));