const { funcWithConnect } = require('../common/db')

async function getWord(word) {
    return funcWithConnect('findOne', ['Word', {name: word}])
}
async function getWordById(id) {
    return funcWithConnect('findOne', ['Word', {_id: id}])
}
async function getAllWords() {
    return funcWithConnect('find', ['Word']) 
}
async function setWord(word, syllables) {
    if(await this.getWord(word) !== null) return

    let syllables_ids = []
    for(syllable of syllables) {
    const current_syllable = await Syllable.getSyllable(syllable)
    syllables_ids[syllables_ids,length] = 
        current_syllable === null ? 
        await Syllable.setSyllable(syllable)._id : 
        current_syllable._id
    }

    await funcWithConnect('insertOne', ['Word', {name: word, syllables: syllables_ids}]) 
}

module.exports = { getWord, getWordById, getAllWords, setWord}