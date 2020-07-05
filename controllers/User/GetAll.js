const User = require('../models/User')

module.exports = async function GetAll () {
    this.status = 200
    this.body = await User.getAllUsers()
}