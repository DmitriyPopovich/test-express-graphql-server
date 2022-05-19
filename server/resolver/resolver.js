const CommitsApiService = require("../api-services/commits-api-service");
const ApikeyService = require("../services/apikey");
const DbError = require("../exceptions/db-error");
const AuthError = require("../exceptions/auth-error");

const checkAuth = async (token) => {
    if(!token) throw AuthError.EmptyToken()
    const data_key = await ApikeyService.getKey(token)
    if(!data_key.length) throw AuthError.InvalidToken()
}

const resolver = {


    getAllCommits: async ({token}) => {
        await checkAuth(token)
        return await CommitsApiService.getAllCommits()
    },
    getLimitCommits: async ({page, token}) => {
        await checkAuth(token)
        return await CommitsApiService.getLimitCommits(page)
    },
    getKeys: async ({token}) => {
        await checkAuth(token)
        return await ApikeyService.getKeys()
    },
    createKey: async ({token}) => {
        await checkAuth(token)
        const apikey = Date.now()
        return await ApikeyService.createKey(apikey)
    },
    helloWorld: async () => {
        const data = {message: 'Hello world!'}
        return data
    }
}

module.exports = resolver