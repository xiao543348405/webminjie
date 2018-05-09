const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
const leapyear = require('./lib/leapyear')
const anagram = require('./lib/anagram')
/*function leapyear(year) //判断是否是闰年
{
    if(((year%400==0) || (year%100!=0) ) && (year%4==0))
    {
        return true;
    }
    else
    {
        return false;
    }
}/*
console.log("2000   "+leapyear(2000))
//实现fibonacci数列
/*function fibonacci(n) {
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
  }*/
console.log("2000 "+leapyear(2000))
console.log("10 "+fibonacci(10))
console.log("20 "+fibonacci(20))
for(var i=1; i<20; i++)
{
  console.log(fibonacci(i))
}
console.log(anagram("ab"))