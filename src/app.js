// const { emailTemplate } = require('./js-foundation/template')
// require('./js-foundation/desctructuring')
const { getUserById } = require('./js-foundation/03-callbacks')


const id = 1;

getUserById(id,  (error, user) => {
    if (error) {
        throw new Error(error)

    }
    getUserById(2,  (error, user2) => {
        if (error) {
            throw new Error(error)
        }
        console.log({ user, user2 })
    })
})
// console.log(emailTemplate)