const History = require('../models/History')

exports.getAll = async function* () {
    this.status = 200
    this.body = await History.getAllHistories()
}
exports.getById = async function* () {
    const id = this.params.id
    if(!id) {
        this.status = 400
        this.body = { success: false, message: 'id required'}
    }
    this.status = 200
    this.body = await History.getHistoryById(id)
}
exports.setHistory = async function* () {
    const id_word = this.request.body.idWord
    const id_user = this.request.body.idUser
    const syllables = this.request.body.syllables
    const is_correct = this.request.body.isCorrect
    if(!id_word) {
        this.status = 400
        this.body = { success: false, message: 'Word id required'}
    }
    if(!id_user) {
        this.status = 400
        this.body = { success: false, message: 'User id required'}
    }
    if(!syllables) {
        this.status = 400
        this.body = { success: false, message: 'syllables required'}
    }
    if(!is_correct) {
        this.status = 400
        this.body = { success: false, message: 'is_correct required'}
    }
    this.status = 200
    this.body = await History.setHistory(id_user, id_word, syllables, is_correct)
}