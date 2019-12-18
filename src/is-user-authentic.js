const faker = require('faker/locale/en_US')
const isUserAuthentic = () => faker.random.arrayElement([true, false])
module.exports = {
  isUserAuthentic
}
