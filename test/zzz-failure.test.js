// jest.unmock('../src/zzzz');
const functions = require('../src/zzz-failure')

describe('testing mock return value', () => {
  
  it('this will fail because of the local context of the functions', async () => {
    functions.fun2 = jest.fn().mockReturnValue('I am mock')
    functions.fun1('abc');
    expect(functions.fun2).toHaveBeenCalled()
  });

})