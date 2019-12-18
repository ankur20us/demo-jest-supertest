const request = require('supertest')
const faker = require('faker/locale/en_US')

let app
let WelcomeServiceSpyOfMessage
let IsUserAuthenticSpyOnIsUserAuthentic

describe('test', () => {
  beforeEach(() => {

    /**
     * Always create spy then create server
     */
    const WelcomeService = require('../src/welcome-service')
    WelcomeServiceSpyOfMessage = jest.spyOn(
      WelcomeService,
      'message',
    )
    
    /**
     * Always create spy then create server
     */
    const IsUserAuthentic = require('../src/is-user-authentic')
    IsUserAuthenticSpyOnIsUserAuthentic = jest.spyOn(
      IsUserAuthentic,
      'isUserAuthentic'
    )
    app = require('../src/server')
  })

  afterEach(() => {
    /**
     * Most important since b'coz of caching, the mocked implementations sometimes does not resets 
     */
    jest.resetModules()
    jest.restoreAllMocks()
  })

  it('1. Mock implementation, with successful user auth [isUserAuthentic as true]', async () => {
    const mockedMessage = faker.lorem.sentence()
    WelcomeServiceSpyOfMessage.mockImplementation(() => mockedMessage)
    // --> For successful user authentication, sending true :
    IsUserAuthenticSpyOnIsUserAuthentic.mockImplementation(() => true)
    const result = await request(app)
      .get('/api')
    expect(result.statusCode).toBe(200)
    expect(result.body).toHaveProperty('message', mockedMessage)
  })

  it('2. After restored implementation, with successful user auth [isUserAuthentic as true]', async () => {
    /**
     * This will return { 'message' : 'hello world'},
     * since we restored the mock implementation, in afterEach
     * restoreAllMocks and resetModules,
     * works only for methods those are mocked
     * with .spyOn()
     */
    // --> For successful user authentication, sending back true
    IsUserAuthenticSpyOnIsUserAuthentic.mockImplementation(() => true)
    const result = await request(app)
      .get('/api')
    expect(result.statusCode).toBe(200)
    /**
     * This expectation is the same returning from the service
     */
    expect(result.body).toHaveProperty('message', 'hello world')
  })

  it('3. Returning user is Unauthorized, [isUserAuthentic as false]', async () => {
    // for Unauthorized, we return false
    IsUserAuthenticSpyOnIsUserAuthentic.mockImplementation(() => false)
    const result = await request(app)
      .get('/api')
    expect(result.statusCode).toBe(401)
  })
})
