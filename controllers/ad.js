const  Ad = require('../models/Ad');




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



module.exports = {
    uploadAd
};