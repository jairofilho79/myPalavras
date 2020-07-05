const Syllable = require('../models/Syllable')

exports.getAll = async function* () {
    this.status = 200
    this.body = await Syllable.getAllSyllables()
}
exports.getSyllable = async function* () {
    const value = this.params.value
    if(!value) {
        this.status = 400
        this.body = { success: false, message: 'value required'}
    }
    this.status = 200
    this.body = await Syllable.getSyllable(value)
}
exports.getById = async function* () {
    const id = this.params.id
    if(!id) {
        this.status = 400
        this.body = { success: false, message: 'id required'}
    }
    this.status = 200
    this.body = await Syllable.getSyllableById(id)
}
exports.setSyllable = async function* () {
    const syllable = this.request.body.syllable
    if(!syllable) {
        this.status = 400
        this.body = { success: false, message: 'syllable required'}
    }
    this.status = 200
    this.body = await Syllable.setSyllable(syllable)
}