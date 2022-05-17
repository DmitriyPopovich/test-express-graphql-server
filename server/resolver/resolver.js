const CommitsApiService = require("../api-services/commits-api-service");


const resolver = {
    getAllCommits: async () => {
        return await CommitsApiService.getAllCommits()
    },
    getLimitCommits: async ({limit, offset}) => {
        return await CommitsApiService.getLimitCommits(limit, offset)
    }
}

module.exports = resolver