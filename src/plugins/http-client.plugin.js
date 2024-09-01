const axios = require('axios');

//to management various headers  like access token public and private
// const buildHttpClient = (headers) => {
//     return {
    
//         get: async (url) => {
        
//             const {data} = await axios.get(url, headers)
//             return data
    
//             // const resp = await fetch(url)
//             // return await resp.json()
//         },
//         post: async(url, body) => {},
//         put: async(url, body) => {},
//         delete: async(url) => {},


// }
// }



const httpClientPLugin = {

    get: async (url) => {
        
        const {data} = await axios.get(url)
        return data

        // const resp = await fetch(url)
        // return await resp.json()
    },
    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url) => {},

}

module.exports = {
    http: httpClientPLugin,
} 