const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
   type User {
       id: ID
       username: String!
       type: String!
       img: String!
       buddies: [Pet]
   }

   type Pet {
        id: ID!
        createdAt: String!
        name: String!
        type: String!
   }

   type Query {
       pets(input: PetInput): [Pet]!
       pet(input: PetInput): Pet
   }

`;

module.exports = typeDefs
