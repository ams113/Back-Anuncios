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
        img: String
    }

    input PruebaInput {
        type: String!
    }

    type UpdateAvatar {
        status: Boolean
        urlAvatar: String
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
        img: String
    }

    input AdInput {
        type: String!
        description: String
        size: Int
        km: Int
        color: String
        fabricant: String
        height: Int
        img: String
    }

    type Query {
        # User
        getUser( id: ID): [User]
        # Ad
        getAd( id: ID ): Ad
        getAds(id: ID ): [Ad]
    }

    type Mutation {
        # User
        register( input: UserInput ): User
        login( input: LoginInput ): Token
        
        
        # Ad
        uploadAd( input: UploadInputs ): SaveAd
        updateAvatar( file: Upload): UpdateAvatar

    }

`;

module.exports = typeDefs;