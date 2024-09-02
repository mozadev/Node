import { getUUID } from '../get-id.plugin';
import { getAge } from '../get-age.plugin';

interface BuildMakePersonOption {
    getUUID: () => string;
    getAge: (birth: string) => number;

}

// const { getAge, getUUID } = require('../plugins')

interface PersonOptions {
    name: string;
    birth: string;
}



export const buildMakePerson = ({ getAge, getUUID }: BuildMakePersonOption) => {

    return ({ name, birth }: PersonOptions) => {
        return {
            id: getUUID(),
            name: name,
            birth: birth,
            age: getAge(birth),

        }
    }


}


// const obj = { name: 'jon', birth: '2000-01-15' }
// const john = buildPerson(obj)
// console.log(john)
// module.exports = {
//     buildMakePerson,
// }