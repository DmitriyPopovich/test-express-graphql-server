const {buildSchema} = require('graphql')


const schema = buildSchema(`
    type Commit {
        sha: String
        html_url: String
        date: String
        author: Committer
    }
    type Committer {
        name: String
        email: String
    }
    type PaginatorCommits {
        count_total: Int
        count_pages: Int
        page: Int
        data: [Commit]
    }
    type Query {
        getAllCommits: [Commit!]
        getLimitCommits(page: Int): PaginatorCommits!

    }   
`)
module.exports = schema
