const removeFromArray = function(arr, ...targets) {
    const newArray = [];

    arr.forEach(item => {
        if (!targets.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
};

arr = [1, 2, 3, 4, 6, 4, 9]
target = 9
console.log(removeFromArray(arr, target))
// Do not edit below this line
module.exports = removeFromArray;
