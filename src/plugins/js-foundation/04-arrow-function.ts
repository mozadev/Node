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

export const getUserById = (id: number, callback: (err?: string, user?: User) => void) => {

    const user = users.find(user => user.id === id);

    (user)
        ? callback(undefined, user)
        : callback(`User not found with id ${id}`)

    // if (!user) {
    //     return callback(`USER not found  with id ${id}`);
    // }
    // return callback(null, user)
}

// getUserById(1)
/*  */
// module.exports = {
//     getUserById,
// }

