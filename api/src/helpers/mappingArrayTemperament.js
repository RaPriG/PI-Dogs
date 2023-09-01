

const arrayTemperaments = (dogsFromDB) => {
    
    const dogsWithTemperaments = [...dogsFromDB].map(dog => {
        const temperaments = dog.dataValues.temperaments.map(temp => temp.name);
        delete dog.dataValues.temperaments;
        return {
            ...dog.toJSON(),
            temperament: temperaments // Renombramos el atributo aquí
        };
    });
    console.log(dogsWithTemperaments);
    return dogsWithTemperaments;
}



module.exports =arrayTemperaments;