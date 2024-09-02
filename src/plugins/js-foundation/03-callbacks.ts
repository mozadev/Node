interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'ja d',
    }, {
        id: 2,
        name: 'fed '
    }
]

export function getUserById(id: number, callback:(err?:string, user?:User) => void) {
    const user = users.find(function (user) {
        return user.id === id;
    })

    if (!user) {
        return callback(`USER not found  with id ${id}`);
    }
    return callback(undefined, user)
}

// getUserById(1)

// module.exports = {
//     getUserById,
// }

