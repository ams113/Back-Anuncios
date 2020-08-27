const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
    type Query {
      anuncio: Anuncio
      hello: String
    }

    type Anuncio {
    id: ID
    description: String
    type(size: TypeAd): String
    score: Int
    imageIds: [Int]
    size: Int
    km: Int
    color: String
    fabricant: String
    height: Int,
    }

    enum TypeAd {
    PISO
    CHALET
    VEHICULO
    FRIGORIFICO
    }
`;

module.exports = typeDefs;