/**
 * 如何实现reduce
 * reduce(callback,init)
 * callback(sum,current,index)
 * 
 * 1. init maybe null
 * 2. if init  else
 * 3. return results 
 */
// myselfs versom
Array.prototype.myreduce = function (callback, initial) {
    let result;
    let selfInit = [];

    let current;
    let arr = this;
    let length = this.length;
    if (!initial) {
        selfInit = [];
    }

    if (callback) {
        for (let i = 0; i < length; i++) {
            result = result + this[i];
            callback(sum, this[i], index);
        }
    }

    return result;
};
