const allExports = {}

const fun2 = a => `Fun2 ---> ${a}`
allExports.fun2 = fun2

const fun1 = a => `Fun1 ---> ${allExports.fun2(a)}`
allExports.fun1 = fun1

/**
 * For contextual bindind in between the functions we have made this change 
 */
module.exports = allExports