/**
 * 
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let a = 1;
     while(a <= (x + 1)) {
         if(a * a > x) {
             return a-1;
         }
         a++;
     }
     return 0;
 };
let x = 8;
console.log(mySqrt(x));
