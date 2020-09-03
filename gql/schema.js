const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID
        name: String
        userName: String
        email: String
        avatar: String
        siteWeb: String
        description: String
        password: String
        createAt: String
    }

    type Token {
        token: String
    }

    type SaveAd {
        msg: String
    }

    type Ad {
        id: ID
        description: String
        type: String
        score: Int
        size: Int
        km: Int
        color: String
        fabricant: String
        height: Int
    }

    input PruebaInput {
        type: String!
    }

    input UserInput {
        name: String!
        userName: String!
        email: String!
        password: String!
    }

    input LoginInput {
        email: String!
        password: String!
    }

    input UploadInputs {
        type: String!
        description: String
        size: Int
        km: Int
        color: String
        fabricant: String
        height: Int
    }

    input AdInput {
        type: String!
        description: String
        size: Int
        km: Int
        color: String
        fabricant: String
        height: Int
    }

    type Query {
        # User
        getUser: User
        # Ad
        getAd: Ad
    }

    type Mutation {
        # User
        register( input: UserInput ): User
        login( input: LoginInput ): Token
        
        # Ad
        uploadAd( input: UploadInputs ): SaveAd
    }

`;

module.exports = typeDefs;