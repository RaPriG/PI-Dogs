const { Dog, Temperament } = require('../../db');
const mappingArrayTemperaments = require('../../helpers/mappingArrayTemperament');

const getAllDogsFromDB = async () => {
    try {
        const allDogsFromDB = await Dog.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [{
                model: Temperament,
                attributes: ["name"],
                through: { attributes: [] }
            }]
        });
        const dogsWithTemperaments = mappingArrayTemperaments(allDogsFromDB);

        return dogsWithTemperaments;

    } catch (error) {
        return error;
    }
}

module.exports = getAllDogsFromDB;






























// CONSULTA MAPEADA [
//     {
//       dataValues: {
//         id: '9e4c44a9-c780-45c8-b55f-097a1202c7f2',
//         name: 'burro e vaca2',
//         weight_min: 3,
//         weight_max: 6,
//         height_min: 23,
//         height_max: 29,
//         life_span: '10 - 12 years',
//         image: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
//         temperaments: [Array]
//       },
//       _previousDataValues: {
//         id: '9e4c44a9-c780-45c8-b55f-097a1202c7f2',
//         name: 'burro e vaca2',
//         weight_min: 3,
//         weight_max: 6,
//         height_min: 23,
//         height_max: 29,
//         life_span: '10 - 12 years',
//         image: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
//         temperaments: [Array]
//       },
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: {
//         isNewRecord: false,
//         _schema: null,
//         _schemaDelimiter: '',
//         include: [Array],
//         includeNames: [Array],
//         includeMap: [Object],
//         includeValidated: true,
//         attributes: [Array],
//         raw: true
//       },
//       isNewRecord: false,
//       temperament: [ 'Afghan Hound', 'African Hunting Dog' ]
//     },
//     {
//       dataValues: {
//         id: '5ac2ad8a-73cc-4281-b63a-9aac9680c231',
//         name: 'burro e vaca3',
//         weight_min: 3,
//         weight_max: 6,
//         height_min: 23,
//         height_max: 29,
//         life_span: '10 - 12 years',
//         image: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
//         temperaments: [Array]
//       },
//       _previousDataValues: {
//         id: '5ac2ad8a-73cc-4281-b63a-9aac9680c231',
//         name: 'burro e vaca3',
//         weight_min: 3,
//         weight_max: 6,
//         height_min: 23,
//         height_max: 29,
//         life_span: '10 - 12 years',
//         image: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
//         temperaments: [Array]
//       },
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: {
//         isNewRecord: false,
//         _schema: null,
//         _schemaDelimiter: '',
//         include: [Array],
//         includeNames: [Array],
//         includeMap: [Object],
//         includeValidated: true,
//         attributes: [Array],
//         raw: true
//       },
//       isNewRecord: false,
//       temperament: [ 'Afghan Hound', 'African Hunting Dog' ]
//     },
//     {
//       dataValues: {
//         id: 'b5d8416c-a8d3-40e0-99c2-b61e0c110935',
//         name: 'burro e vaca',
//         weight_min: 3,
//         weight_max: 6,
//         height_min: 23,
//         height_max: 29,
//         life_span: '10 - 12 years',
//         image: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
//         temperaments: []
//       },
//       _previousDataValues: {
//         id: 'b5d8416c-a8d3-40e0-99c2-b61e0c110935',
//         name: 'burro e vaca',
//         weight_min: 3,
//         weight_max: 6,
//         height_min: 23,
//         height_max: 29,
//         life_span: '10 - 12 years',
//         image: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
//         temperaments: []
//       },
//       uniqno: 1,
//       _changed: Set(0) {},
//       _options: {
//         isNewRecord: false,
//         _schema: null,
//         _schemaDelimiter: '',
//         include: [Array],
//         includeNames: [Array],
//         includeMap: [Object],
//         includeValidated: true,
//         attributes: [Array],
//         raw: true
//       },
//       isNewRecord: false,
//       temperament: []
//     }
//   ]


