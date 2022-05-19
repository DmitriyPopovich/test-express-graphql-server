const graphql = require('graphql')

const committerType = new graphql.GraphQLObjectType({
    name: 'Committer',
    fields: {
        name: { type: graphql.GraphQLString },
        email: { type: graphql.GraphQLString },
    }
})
const commitType = new graphql.GraphQLObjectType({
    name: 'Commit',
    fields: {
        sha: { type: graphql.GraphQLString },
        html_url: { type: graphql.GraphQLString },
        date: { type: graphql.GraphQLString },
        author: { type: committerType },
    }
});
const paginatorCommitsType = new graphql.GraphQLObjectType({
    name: 'PaginatorCommits',
    fields: {
        count_total: { type: graphql.GraphQLString },
        count_pages: { type: graphql.GraphQLString },
        page: { type: graphql.GraphQLString },
        data:{ type:  new graphql.GraphQLList(commitType)},
    }
})
const keyType = new graphql.GraphQLObjectType({
    name: 'Key',
    fields: {
        id: { type: graphql.GraphQLString },
        api_key: { type: graphql.GraphQLString },
        created_at: { type: graphql.GraphQLString },
    }
});
const helloWorldType = new graphql.GraphQLObjectType({
    name: 'HelloWorld',

    fields: {
        message: { type: graphql.GraphQLString },
        // resolve: (post, args, context, { rootValue }) => {
        //     // return the post body only if the user is the post's author
        //     // if (context.user && (context.user.id === post.authorId)) {
        //     //     return post.body;
        //     // }
        //     console.log(post, args, context)
        // },
    }
});
const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        getAllCommits: {
            type: new graphql.GraphQLList(commitType),
            args: {
                token: { type: graphql.GraphQLString }
            },
        },
        getLimitCommits: {
            type: paginatorCommitsType,
            args: {
                page: { type: graphql.GraphQLInt },
                token: { type: graphql.GraphQLString }
            },
        },
        getKeys: {
            type: new graphql.GraphQLList(keyType),
            args: {
                token: { type: graphql.GraphQLString }
            },
        },
        helloWorld: {
            type: helloWorldType,
        }
    }
})
const mutationType = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createKey: {
            type: new graphql.GraphQLList(keyType),
            args: {
                token: { type: graphql.GraphQLString }
            },
        }
    }
});

const schema = new graphql.GraphQLSchema({query: queryType, mutation: mutationType})
module.exports = schema