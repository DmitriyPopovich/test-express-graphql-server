const CommitsApiService = require("../api-services/commits-api-service");
const ApikeyService = require("../services/apikey");


const resolver = {
    getAllCommits: async () => {
        return await CommitsApiService.getAllCommits()
    },
    getLimitCommits: async ({page}) => {
        return await CommitsApiService.getLimitCommits(page)
    },
    getKeys: async () => {
        return await ApikeyService.getKeys()
    }
}

module.exports = resolver