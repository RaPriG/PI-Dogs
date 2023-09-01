const { Dog, Temperament } = require('../db');

const postDog = async (req, res) => {
    try {
        const {
            name,
            weight_min,
            weight_max,
            height_min,
            height_max,
            life_span,
            image,
            temperaments: temperamentsSelec } = req.body;
        const dogs = await Dog.create({
            name,
            weight_min,
            weight_max,
            height_min,
            height_max,
            life_span,
            image,
        });

        const temperaments = await Temperament.findAll({
            where: {
                id: temperamentsSelec
            }
        });

        await dogs.addTemperaments(temperaments);

        res.status(201).send("Regitro realizado");

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

module.exports = postDog;