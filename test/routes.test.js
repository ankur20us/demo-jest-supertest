const request = require('supertest')
const app = require('../src/server')

const WelcomeService = require('./../src/welcome-service')
const WelcomeServiceSpyOfMessage = jest.spyOn(
  WelcomeService,
  'message',
)

describe('test', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('testing with mock implementation', async () => {
    const mockedMessage = 'I am mocked implementation'
    WelcomeServiceSpyOfMessage.mockImplementation(() => mockedMessage)
    const result = await request(app)
      .get('/api')
    // console.log(result.body)
    expect(result.statusCode).toBe(200)
    expect(result.body).toHaveProperty('message', mockedMessage)
  })

  it('testing after restored implementation', async () => {
  /**
   * This will return { 'message' : 'hello world ankur'},
   * since we restored the mock implementation, in afterEach
   * restoreAllMocks works only for methods those are mocked
   * with .spyOn()
   */
    const result = await request(app)
      .get('/api')
    // console.log(result.body)
    expect(result.statusCode).toBe(200)
    /**
     * This expectation is the same returning from the service
     */
    expect(result.body).toHaveProperty('message', 'hello world')
  })
})
