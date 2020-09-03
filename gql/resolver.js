const userController = require('../controllers/user');
const adController = require('../controllers/ad');


const  resolvers = {

    Query: {
        // User
        getUser: () => {
            console.log('Obteniendo usuario');
            return null;
        }
    },
    Mutation: {
        // User
        register: ( _, { input } ) => userController.register( input ),
        login: ( _, { input } ) => userController.login( input ),
        uploadAd: ( _, { input } ) => adController.uploadAd( input ),
        
    },
};

module.exports = resolvers;