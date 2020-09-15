const  Ad = require('../models/Ad');
const awsUploadImage = require('../utils/aws-upload-image');
const { v4: uuidv4 } = require('uuid');



 const uploadAd =  ( input ) => {

    const newAd = input;

    // Guardar en MongoDB
    try {
        
        const ad = new Ad(newAd);
        ad.save( (err, ad) => {

            calculateRate(ad._id);
            
        });

        return {
            msg: 'Anuncio subido'
        };

        

        
    } catch (error) {
        console.error(error);
    }

    
};


const calculateRate = async ( id ) => {

    console.log('calculateRate');
    const adFound = await Ad.findOne( { _id: id });

    
    console.log(adFound);

    

    adFound.type = adFound.type.toUpperCase();

    console.log(adFound.type);

    let score = 0;
    const tags = ['luminoso', 'nuevo', 'cuidado', 'fabuloso', 'unico', 'excepcional', 'ocasion'];

    switch (adFound.type) {
        case 'PISO':
            if ( adFound.description) {
                score += 5;
                if( adFound.description.length >= 50 ){
                    score += 25;
                }
                if( adFound.description.length >= 20 ){
                    score += 5;
                }
                for (i = 0; i < tags.longitud; i++) {
                    if (  adFound.description.includes(tags[i]) ) {
                        score += 5;
                    }
                }
                if (adFound.size) {
                    score += 40;
                }

            }
             break;

        case 'CHALET':
            if ( adFound.description) {
                score += 5;
                if( adFound.description.length >= 50 ){
                    score =+ 15;
                }

                for (i = 0; i < tags.longitud; i++) {
                    if (  adFound.description.includes(tags[i]) ) {
                        score += 5;
                    }
                }
                if (adFound.size) {
                    score += 40;
                }
                
            }
          break;

        case 'VEHICULO':
            if ( adFound.description) {
                score += 5;
                if ( adFound.km && adFound.fabricant && adFound.color ) {
                    score += 40;
                }
            }
            break;
        case 'FRIGORIFICO':
                if ( adFound.description) {
                    score += 5;
                }
                if ( adFound.height) {
                    score += 40;
                }
                break;
      }

      if (adFound.img) {
        score += 10;
      } else {
          score -= 10;
      }

     console.log('score', score);

     const rateUpdate = await Ad.findByIdAndUpdate(id, { score: score} );

     if ( !rateUpdate ) {
        throw new Error('Score no actualizado');
    }

}


const uploadImg = async ( file, context ) => {

    
    // const { id } = context.user;
    const id  = uuidv4();
    
    const { createReadStream, mimetype } = await file;
    const extension = mimetype.split('/')[1]; 
    const imagePath = `ads/${ id }.${ extension }`;
    const fileData = createReadStream();
 

    try {

        console.log(imagePath);
        
        const result = await awsUploadImage( fileData, imagePath );

        
        return {
            status: true,
            urlAvatar: result
        }; 

    } catch (error) {
        return {
            status: false,
            urlAvatar: null
        };
    } 
       
};
  
const getAd = async ( id ) => {

    console.log('getAd ', id);

    let ad = null;

    if ( id ) ad = await Ad.findById(id);

    if ( !ad ) throw new Error( 'El Anuncio no existe ');
    console.log(ad);
    return ad;
};

const getAds = async ( id ) => {

    console.log(id);

    let ads = null;

    ads = await Ad.find().sort({score: -1});

    
    return ads;
};



module.exports = {
    uploadAd,
    uploadImg,
    getAd,
    getAds,
};