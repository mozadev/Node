
const { getAge, getUUID } = require('./plugins')

// const { emailTemplate } = require('./js-foundation/template')
// require('./js-foundation/desctructuring')
// const { getUserById } = require('./js-foundation/03-callbacks')




const { buildMakePerson } = require('./js-foundation/05-factory')

const makePerson = buildMakePerson({ getUUID, getAge })


const obj = { name: 'jon', birth: '2000-01-15' }


const john = makePerson(obj);

console.log({ john })

