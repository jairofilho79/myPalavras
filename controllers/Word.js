const Word = require('../models/Word')

exports.getAll = async function* () {
    this.status = 200
    this.body = await Word.getAllWords()
}
exports.getWord = async function* () {
    const value = this.params.value
    if(!value) {
        this.status = 400
        this.body = { success: false, message: 'value required'}
    }
    this.status = 200
    this.body = await Word.getWord(value)
}
exports.getById = async function* () {
    const id = this.params.id
    if(!id) {
        this.status = 400
        this.body = { success: false, message: 'id required'}
    }
    this.status = 200
    this.body = await Word.getWordById(id)
}
exports.setWord = async function* () {
    const word = this.request.body.word
    const syllables = this.request.body.syllables
    if(!word) {
        this.status = 400
        this.body = { success: false, message: 'word required'}
    }
    if(!syllables) {
        this.status = 400
        this.body = { success: false, message: 'syllables required'}
    }
    this.status = 200
    this.body = await Word.setWord(word, syllables)
}