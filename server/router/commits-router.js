const {graphqlHTTP} = require("express-graphql");
const schema_commit = require('../schema/schema')
const commitResolver = require('../resolver/resolver')

const commitsRouter = graphqlHTTP({
    graphiql: true,
    schema: schema_commit,
    rootValue: commitResolver
})
module.exports = commitsRouter
