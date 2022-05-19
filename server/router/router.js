const {graphqlHTTP} = require("express-graphql");
const schema = require('../schema/schema')
const resolver = require('../resolver/resolver')

const router = graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: resolver
})

module.exports = router
