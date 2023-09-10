
const filterByTemperaments = (dog, datos) => {
    if (datos.filter.temperaments.length) {
        if (dog?.temperament?.length) {
            const arrayTemp = dog.temperament.split(',').map(temp => temp.trim());

            const result = arrayTemp.some(temp => {

                if (datos.filter.fromApi === datos.filter.fromDB) {

                    return datos.filter.temperaments.includes(temp);
                }
                else if (datos.filter.fromDB) {

                    return datos.filter.temperaments.includes(temp) && (typeof dog.id !== 'number');
                } else {

                    return datos.filter.temperaments.includes(temp) && (typeof dog.id === 'number');
                }
            });
            return result;

        } else {
            return false;
        }
    } else {

        if (datos.filter.fromApi === datos.filter.fromDB) {

            return true;
        }
        else if (datos.filter.fromDB) {

            return (typeof dog.id !== 'number');
        } else {

            return (typeof dog.id === 'number');
        }
    }
}

const orderBy = (a, b, datos) => {
    if (datos.order.by === 'breed') {
        if (datos.order.ascDesc === 'ascending') {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        } else if (datos.order.ascDesc === 'descending') {
            return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
        }

    } else if (datos.order.by === 'weight') {
        if (datos.order.ascDesc === 'ascending') {
            return a.weight_max - b.weight_max;
        } else if (datos.order.ascDesc === 'descending') {
            return b.weight_max - a.weight_max;
        }
    }
}

const filterByName = (dog, datos) => {

    return (datos.name.trim() !== '')
        ? dog.name.toLowerCase().includes(datos.name.toLowerCase())
        : dog;
}

export {
    filterByTemperaments,
    orderBy,
    filterByName
}