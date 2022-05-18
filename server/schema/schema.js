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
    type Key {
        id: ID
        api_key: String
        created_at: String
    }
    type Query {
        getAllCommits: [Commit!]
        getLimitCommits(page: Int): PaginatorCommits!
        getKeys: [Key!]

    }   
`)
module.exports = schema
