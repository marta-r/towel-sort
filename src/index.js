// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!arguments[0]) {
        return [];
    } else {
        let combinedArr = [];
        let arr = matrix.concat();
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                arr[i].forEach(item => combinedArr.push(item));
            } else {
                arr[i].reverse();
                arr[i].forEach(item => combinedArr.push(item));
            }
        }
        return combinedArr;
    }
};
