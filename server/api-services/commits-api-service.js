const $api = require("../http");
const ApiError = require("../exceptions/api-error");
const CommitsDto = require("../dtos/commits-dto");
const paginator = require('../helpers/paginator')

class CommitsApiService {
     async getAllCommits(){
        const commits = await $api.get('https://api.github.com/repos/facebook/react/commits')
        if(!commits) throw ApiError.BadRequest()
        const result = commits.data.map(commit=>{
            return new CommitsDto(commit)
        })
        return result
    }
    async getLimitCommits(page){
        const commits = await this.getAllCommits()
        const limit = process.env.COUNT_ON_PAGE
        return paginator(limit, page, commits)
    }
}
module.exports = new CommitsApiService()