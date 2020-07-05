const { funcWithConnect } = require('./common/db')

  async function getUser(user) {
    return funcWithConnect('findOne', ['User', {username: user}])
  }
  async function getUserById(id) {
    return funcWithConnect('findOne', ['User', {_id: id}])
  }
  async function getAllUsers() {
    return funcWithConnect('find', ['User']) 
  }
  async function setUser(user) {
    if(await this.getUser(user) === null) 
      await funcWithConnect('insertOne', ['User', {username: user}]) 
  }

module.exports = { getUser, getUserById, getAllUsers, setUser }