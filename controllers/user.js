const  User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const createToken = ( user, SECRET_KEY, expiresIn ) => {
    
    const { id, name, email, userName } = user;

    

    const payload = {
        id,
        name,
        email,
        userName
    };

    return jwt.sign( payload, SECRET_KEY, { expiresIn } );


}


 const register =  async ( input ) => {

    const newUser = input;

    newUser.email = newUser.email.toLowerCase();
    newUser.userName = newUser.userName.toLowerCase();
    
    const { email, userName, password } = newUser;

    // Revisar si el email esta en uso
    const foundEmail = await User.findOne( { email } );
    
    if ( foundEmail ) {
        throw new Error('El email ya esta en uso');
    }

    // Revisar si el userName esta en uso
    const foundUserName = await User.findOne( { userName } );
    
    if ( foundUserName ) {
        throw new Error('El nombre de usuario ya esta en uso');
    }

    // Encriptar.
    const salt = await bcryptjs.genSaltSync( 10 );
    newUser.password = await bcryptjs.hash( password, salt );

    // Guardar en MongoDB
    try {
        
        const user = new User(newUser);
        user.save();

        return user;

        
    } catch (error) {
        console.error(error);
    }
};

const login =  async ( input ) => {

    console.log(input);
    const { email, password } = input;

    const userFound = await User.findOne( { email: email.toLowerCase() } );

    if ( !userFound ) {
        throw new Error('Error en el email o password');
    }

    const passwordSuccess = await bcryptjs.compare( password, userFound.password );

    if ( !passwordSuccess ) {
        throw new Error('Error en el email o password');
    }

    return {
        token: createToken( userFound, process.env.SECRET_KEY, '24h' )
    };

  
};

const prueba =  ( input ) => {

    console.log(input);
    return {
        msg: 'Anuncio subido'
    };
}

const getUser = async (id) => {

    console.log(id);
    let user = null;

    user = await User.find();

    return user;
};



module.exports = {
    register,
    login, 
    prueba,
    getUser,
}