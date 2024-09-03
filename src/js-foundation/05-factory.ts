import { getUUID } from '../plugins/get-id.plugin';
import { getAge } from '../plugins/get-age.plugin';

interface BuildMakePersonOption {
    getUUID: () => string;
    getAge: (birth: string) => number;

}

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

