const getAgePlugin = require('get-age')

export const getAge = (birth: string ) => {

    return getAgePlugin(birth)
}

