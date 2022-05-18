const CommitsApiService = require("../api-services/commits-api-service");


const resolver = {
    getAllCommits: async () => {
        return await CommitsApiService.getAllCommits()
    },
    getLimitCommits: async ({page}) => {
        return await CommitsApiService.getLimitCommits(page)
    }
}

module.exports = resolver