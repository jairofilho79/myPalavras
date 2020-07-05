const User = require('../models/User')

module.exports = async function getUser () {
    const value = this.params.value
    if(!value) {
        this.status = 400
        this.body = { success: false, message: 'value required'}
    }
    this.status = 200
    this.body = await User.getUser(value)
}