
const mappingDataDog = (data) => {

    return (
        data.map(dog => {
            //destructurando datos
            const {
                id,
                name,
                life_span,
                weight: { metric: weight },
                height: { metric: height },
                image: { url: image },
                temperament,
            } = dog;

            //convirtiendo EL string = "valorMin - valorMax" en array para separar valores min y max 
            const weight_min = weight.split('-')[0].trim();
            const weight_max = weight.split('-')[1]?.trim();
            const height_min = height.split('-')[0].trim();
            const height_max = height.split('-')[1]?.trim();

            //retornando datos mapeados al formato correcto para registrar como bulkCreate
            return {
                id,
                name,
                temperament,
                weight_min,
                weight_max,
                height_min,
                height_max,
                life_span,
                image,
            };
        })
    );
}



module.exports = mappingDataDog;