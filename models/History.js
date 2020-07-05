const { funcWithConnect } = require('../common/db')

  async function getHistoryById(id) {
    return funcWithConnect('findOne', ['History', {_id: id}])
  }
  async function getAllHistories() {
    return funcWithConnect('find', ['History']) 
  }
  async function setHistory(userId, wordId, syllablesIds, is_correct) {
    return funcWithConnect('insertOne', ['History', {
      is_correct: is_correct,
      id_user: userId,
      id_word: wordId,
      ids_syllables: syllablesIds
    }])
  }

module.exports = { getHistoryById, getAllHistories, setHistory }