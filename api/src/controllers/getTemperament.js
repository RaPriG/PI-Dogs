const { Error, ValidateError } = require('../handlers/errorHandler');
const addTemperamentsFromApiToDB = require('../handlers/dataHandlers/addTemperamentsDB');
const getTemperamentDB = require('../handlers/dataHandlers/getTemperament');


const getAllTemperaments = async (req, res) => {

  try {

    const addTemperaments = await addTemperamentsFromApiToDB();

    ValidateError(res, addTemperaments);

    const getTemperamentsDB = await getTemperamentDB();

    ValidateError(res, getTemperamentsDB);

    res.status(200).json(getTemperamentsDB);

  } catch (error) {
    Error(res, 500, error);
  }
}

module.exports = getAllTemperaments;