/**
 * Sort algorithm
 * 
 * @param {*} arr 
 * @returns 
 */
function sort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temporary = arr[i];
                arr[i] = arr[j];
                arr[j] = temporary;
            }
        }
    }
    return arr;
}

let arr = [3, 1, 5, 8, 4, 2, 5];
console.log(sort(arr));