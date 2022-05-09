function recursion(x) {
    if(x == 0) {
        return 1;
    } else {
        return x * recursion(x - 1);
    }
}
let x = 5;
console.log(recursion(x));