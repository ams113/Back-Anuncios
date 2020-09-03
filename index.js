require('dotenv').config( {path: '.env'} );

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolver');

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true

}, (err, _) => {
    if ( err ) {
        console.log('Error de conexión MongoDB');
    } else {
        console.log('Conexión MongoDB establecida');
        server();
    }
});

const server = () => {

    const serverApollo = new ApolloServer({
        typeDefs,
        resolvers,
    });

    serverApollo.listen()
        .then( ( { url }) => {
            console.log('##########################################');
            console.log('Server Apollo running ' + url);
            console.log('##########################################');
        });
};
