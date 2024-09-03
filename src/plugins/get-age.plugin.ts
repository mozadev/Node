const getAgePlugin = require('get-age')

export const getAge = (birth: string) => {

    //return getAgePlugin(birth)

    return new Date().getFullYear() - new Date(birth).getFullYear()
}

