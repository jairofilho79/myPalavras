const User = require('../models/User')
module.exports = async function setUser () {
    const user = this.request.body.user
    if(!user) {
        this.status = 400
        this.body = { success: false, message: 'user required'}
    }
    this.status = 200
    this.body = await User.setUser(user)
}