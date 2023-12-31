const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    const { id, name, origin, status, image, species, gender } = req.body;

    try {
        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(401).json({ error: 'Missing data' })
        }

        await Favorite.findOrCreate({
            where: {name},
            defaults: {
                id,
                name,
                origin,
                status,
                image,
                species,
                gender
            }
        })

        const allFavs = await Favorite.findAll()

        return res.status(200).json(allFavs)

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = postFav
