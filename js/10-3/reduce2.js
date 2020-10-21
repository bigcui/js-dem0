Array.prototype.myreduce2 = function (callback, init) {
    let result;
    let initial;

    if (init) {
        initial = init;
        result = initial;
    }
    else {
        result = this[0];
    }

    if (callback) {
        let sum = this.length;
        for (let i = init ? 0 : 1; i < sum; i++) {
            result = callback(result, this[i], i,this);
        }
    }

    return result;
};

let arr = [1, 2, 3, 4, 5];
let res = arr.myreduce2((pre, cur, i, arr) => {
    console.log(pre, cur, i, arr);
    return pre + cur;
}, 10);
console.log(res); // 25
