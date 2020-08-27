

const rateAd = ( value ) => {

    let score = 0;
    const tags = ['luminoso', 'nuevo', 'cuidado', 'fabuloso', 'unico', 'excepcional', 'ocasion']

    switch (value.type) {
        case 'PISO':
            if ( value.description) {
                score += 5;
                if( value.description.length >= 50 ){
                    score += 25;
                }
                if( value.description.length >= 20 ){
                    score += 5;
                }
                for (i = 0; i < tags.longitud; i++) {
                    if (  value.description.includes(tags[i]) ) {
                        score += 5;
                    }
                }
                if (value.size) {
                    score += 40;
                }

            }
             break;

        case 'CHALET':
            if ( value.description) {
                score += 5;
                if( value.description.length >= 50 ){
                    score =+ 15;
                }

                for (i = 0; i < tags.longitud; i++) {
                    if (  value.description.includes(tags[i]) ) {
                        score += 5;
                    }
                }
                if (value.size) {
                    score += 40;
                }
                
            }
          break;

        case 'VEHICULO':
            if ( value.description) {
                score += 5;
                if ( value.km && value.fabricant && value.color ) {
                    score += 40;
                }
            }
            break;
        case 'FRIGORIFICO':
                if ( value.description) {
                    score += 5;
                }
                if ( value.height) {
                    score += 40;
                }
                break;
      }

      return score;

}



module.exports = { rateAd };


