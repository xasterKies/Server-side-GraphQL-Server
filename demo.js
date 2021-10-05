const gql = require('graphql-tag')

const typeDefs = gql`
    type User {
        email: String! 
        avatar: String 
        friends: [User!]!
    }

    type Query {
        me: User!
    }
`

const resolver = {
    Query: {
        me() {
            return {
                email: 'yoda@mail.com',
                avatar: 'http://yoda.png',
                friend: []
            }
        }
    }
}

const server = new ApolloServers({
    typeDefs,
    resolvers
})

server.listen(4000)
.then(() => console.log('on port 4000'))