
const { getAge, getUUID } = require('./plugins')

// const { emailTemplate } = require('./js-foundation/template')
// require('./js-foundation/desctructuring')
// const { getUserById } = require('./js-foundation/03-callbacks')
//const getPokemonById = require('./js-foundation/07-async-awai')

const {buildLogger} = require('./plugins')
const logger = buildLogger('apps.js')
logger.log('hi')
logger.error('this is bad')

// getPokemonById(4)
//     .then((pokemon) => console.log({ pokemon }))
//     .catch((err) => console.error(err))
//     .finally(() => console.log('finally'))





// access token
// public



// ! Reference to factory's function


// const { buildMakePerson } = require('./js-foundation/05-factory')

// const makePerson = buildMakePerson({ getUUID, getAge })


// const obj = { name: 'jon', birth: '2000-01-15' }


// const john = makePerson(obj);

// console.log({ john })

