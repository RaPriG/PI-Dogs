const mappingDataDog = require('../helpers/mappingDataDog');
const {allDogsFromAPI} = require('../handlers/apiServices');
const { Error, ValidateError } = require('../handlers/errorHandler');
const getAllDogFromDB = require('../handlers/dataHandlers/getAllDog');

const getAllDogs = async (req, res) => {
    try {
        const allDogsFromApi = await allDogsFromAPI();

        ValidateError(res, allDogsFromApi);

        const allDogsFromApiMapped = mappingDataDog(allDogsFromApi);

        const dogsFromDB = await getAllDogFromDB();

        //Uniendo dogs Api y Dogs Db
        const dogsFromApiAndDB = [...allDogsFromApiMapped, ...dogsFromDB];

        res.status(200).json(dogsFromApiAndDB);

    } catch (error) {

        Error(res, 500, error);
    }
}

module.exports = getAllDogs;















// CONSULTA DIRECTO DB [
//     dog {
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
//       isNewRecord: false
//     },
//     dog {
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
//       isNewRecord: false
//     },
//     dog {
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
//       isNewRecord: false
//     }
//   ]

























































