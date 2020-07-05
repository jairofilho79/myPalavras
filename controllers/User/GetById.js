const User = require('../models/User')

module.exports = async function getById () {
    const id = this.params.id
    if(!id) {
        this.status = 400
        this.body = { success: false, message: 'id required'}
    }
    this.status = 200
    this.body = await User.getUserById(id)
}