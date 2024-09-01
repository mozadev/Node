const getAgePlugin = require('get-age')

const getAge = (birth) => {
    if (!birth) return Error('Birth is required');

    return getAgePlugin(birth)
}

module.exports = {
    getAge,
} 