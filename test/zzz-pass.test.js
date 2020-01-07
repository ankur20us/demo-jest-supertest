// jest.unmock('../src/zzzz');
const allExportsFromZzzPass = require('../src/zzz-pass')

describe('testing mock return value', () => {
  
  it('mocked multiply', async () => {
    const dummyResponse = 'some dummy response'
    allExportsFromZzzPass.fun2 = jest.fn().mockReturnValue(dummyResponse)
    allExportsFromZzzPass.fun1('abc');
    expect(allExportsFromZzzPass.fun2).toHaveBeenCalled()
    expect(allExportsFromZzzPass.fun2).toHaveReturnedWith(dummyResponse)
  });

})