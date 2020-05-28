const masterCharacterList = []
id = 0

module.exports = {
    getAllCharacters: (req, res) => {
        const db = req.app.get('db')

        db.get_all_characters()
        .then(characters => res.status(200).send(characters))
        .catch(error => res.status(500).send(error))
    },
    getCharacter: (req, res) => {
        const {id} = req.params
        const character = masterCharacterList.find(character => character.id === +id)
        res.status(200).send(character)
    },
    addCharacter: (req, res) => {
        const {name, image} = req.body
        const db = req.app.get('db')

        db.add_character([name, image])
        .then(characters => {
            res.status(200).send(characters)
        }).catch(error => res.status(500).send(error))
    },
    editCharacter: (req, res) => {
        const {id} = req.params
        const {name, image} = req.body
        const db = req.app.get('db')

        db.edit_character([id, name, image])
        .then(character => {
            res.status(200).send(character)
        }).catch(error => res.status(500).send(error))
    },
    deleteCharacter: (req, res) => {
        const {id} = req.params
        const index = masterCharacterList.findIndex(character => character.id === +id)
        masterCharacterList.splice(index, 1)
        res.status(200).send(masterCharacterList)
    }
}
