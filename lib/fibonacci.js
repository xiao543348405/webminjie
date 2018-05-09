const fibonacci = (n)=> {
    if (n < 0) {
        throw new Error('输入的数字不能小于0');
          }
          if (n == 0) {
        return 0;
          } 
          if (n == 1) {
        return 1;
          }
          return fibonacci(n-1) + fibonacci(n-2);
}

module.exports = fibonacci