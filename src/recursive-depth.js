module.exports = class DepthCalculator {
  result = 0;
  calculateDepth(arr, count = 1) {
    this.result = count;
    for (let i in arr) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr.flat(), ++count);
        break;
      }
    }
    return this.result;
  }
};
