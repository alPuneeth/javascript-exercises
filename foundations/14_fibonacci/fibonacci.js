const fibonacci = function(position) {

    // if position is other than Number, it returns NaN
    let count = Math.floor(Number(position))  

    if (Number.isNaN(count) || (count < 0)) {
        return "OOPS"
    }

    if (count === 0) return 0

    let firstPrev = 1
    let secondPrev = 0

    // start from 2 as 0 and 1 are taken by firstPrev and secondPrev respectively
    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev
        secondPrev = firstPrev
        firstPrev = current
    }
    return firstPrev
};


// array approach
// const fibonacci = function(position) {

//     if (position < 0) return "OOPS" 
//     const fib = [0, 1]

//     for (let i = 2; i <= position; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib[position]
// }

// Do not edit below this line
module.exports = fibonacci;
