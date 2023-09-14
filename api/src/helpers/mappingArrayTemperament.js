
// se le da el formato correcto a los temperamentos separados por obj obtenido de la tabla de relacion de dog y temp
const arrayTemperaments = (dogsFromDB) => {
    
    const dogsWithTemperaments = [...dogsFromDB].map(dog => {
        const temperaments = dog.dataValues.temperaments.map(temp => temp.name);
        delete dog.dataValues.temperaments;
        return {
            ...dog.toJSON(),
            temperament: temperaments.join(', ') // Renombramos el atributo aquí
        };
    });

    return dogsWithTemperaments;
}



module.exports =arrayTemperaments;