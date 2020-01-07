const fun2 = a => `Fun2 ---> ${a}`
const fun1 = a => `Fun1 ---> ${fun2(a)}`
/**
 * These 2 functions are going to have the individual context 
 * and so mocking will not work as expected in these functions
 */
module.exports = {
  fun1,
  fun2
}