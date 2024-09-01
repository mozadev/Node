const users = [
    {
        id: 1,
        name: 'ja d',
    }, {
        id: 2,
        name: 'fed '
    }
]

function getUserById(id, callback) {
    const user = users.find(function (user) {
        return user.id === id;
    })
   
    if (!user) {
        return callback(`USER not found  with id ${id}`);
    }
    return callback(null, user)
}

// getUserById(1)

module.exports = {
    getUserById,
}

