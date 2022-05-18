const {graphqlHTTP} = require("express-graphql");
const schema = require('../schema/schema')
const resolver = require('../resolver/resolver')

const commitsRouter = graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: resolver
})
module.exports = commitsRouter
