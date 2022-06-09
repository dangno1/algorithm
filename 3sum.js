/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let test = [];
    if(nums.length < 3) {
        console.log(test);
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] != nums[j] != nums[k] && nums[i] + nums[j] + nums[k] == 0) {
                    console.log(test = [nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
};
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

