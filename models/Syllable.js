const { funcWithConnect } = require('../common/db')

  async function getSyllable(syllable) {
    return funcWithConnect('findOne', ['Syllable', {name: syllable}])
  }
  async function getAllSyllables() {
    return funcWithConnect('find', ['Syllable']) 
  }
  async function getSyllableById(id) {
    return funcWithConnect('findOne', ['Syllable', {_id: id}])
  }
  async function setSyllable(syllable) {
    if(await this.getSyllable(syllable) === null) 
      await funcWithConnect('insertOne', ['Syllable', {name: syllable}]) 
  }

module.exports = { getSyllable, getAllSyllables, getSyllableById, setSyllable}