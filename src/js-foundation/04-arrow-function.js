const users = [
    {
        id: 1,
        name: 'ja d',
    }, {
        id: 2,
        name: 'fed '
    }
]

const getUserById = (id, callback) => {
 
    const user = users.find((user) => user.id === id)

        (user)
        ? callback(null, user)
        : callback(`User not found with id ${id}`)

    // if (!user) {
    //     return callback(`USER not found  with id ${id}`);
    // }
    // return callback(null, user)
}

// getUserById(1)
/*  */
module.exports = {
    getUserById,
}

