
const mappingDataTemperament = (data) => {

    const tempContainer = new Set();

    data.forEach(dog => {
        if (dog?.temperament) {

            const tempByDog = dog.temperament.split(',');

            tempByDog.forEach(temp => {
                tempContainer.add(temp.trim());
            });
        }
    });

    const arrayConvert = new Array(...tempContainer);

    const newArrayTemp = arrayConvert.map(temp => { return { name: temp } });

    return newArrayTemp;
}

module.exports = mappingDataTemperament;