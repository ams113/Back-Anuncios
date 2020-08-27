require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
// const { createStore } = require('./utils');
// const resolvers = require('./resolvers');

// const LaunchAPI = require('./datasources/launch');
// const UserAPI = require('./datasources/user');

// const store = createStore();

// const isEmail = require('isemail');

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(function (err) {
  console.log("MONGOdb connected");
  db = client.db("Prueba"); //mongodb database name
});

const resolvers = {
  Query: {
    hello: () => {
      return `hey sup ? `;
    },
    anuncio: async () => {
      values = await db.collection('anuncios').find().toArray().then(res => { return res });
      return values
    }
  }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
  });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});