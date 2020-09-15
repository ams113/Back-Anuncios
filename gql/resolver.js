const userController = require('../controllers/user');
const adController = require('../controllers/ad');


const  resolvers = {

    Query: {
        getUser: (_, {id} ) => userController.getUser( id),
        getAds: (_, {id} ) => adController.getAds( id),
        getAd: (_, {id} ) => adController.getAd( id),
    },
    Mutation: {
        // User
        register: ( _, { input } ) => userController.register( input ),
        login: ( _, { input } ) => userController.login( input ),
        uploadAd: ( _, { input } ) => adController.uploadAd( input ),
        updateAvatar: ( _, { file}, context ) => adController.uploadImg( file, context ),
   
        
    },
};

module.exports = resolvers;