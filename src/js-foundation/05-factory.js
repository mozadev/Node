


const { getAge, getUUID } = require('../plugins')

const buildPerson = ({ name, birth }) => {
    return {
        id: getUUID(),
        name: name,
        birth: birth,
        age: getAge(birth),

    }
}


// const obj = { name: 'jon', birth: '2000-01-15' }
// const john = buildPerson(obj)
// console.log(john)
module.exports = {
    buildPerson,
}