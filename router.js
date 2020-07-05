
'use strict'
const Router = require('koa-router')

const User = require('./controllers/User')
const Syllable = require('./controllers/Syllable')
const Word = require('./controllers/Word')
const History = require('./controllers/History')

const router = new Router()
const api = new Router({ prefix: '/api' })

api.get('/users/', User.GetAll)
api.get('/user/id/:id', User.GetById)
api.get('/user/:value', User.GetUser)
api.post('/user', User.Create)

api.get('/syllables/', Syllable.getAll)
api.get('/syllable/id/:id', Syllable.getById)
api.get('/syllable/:value', Syllable.getSyllable)
api.post('/syllable', Syllable.setSyllable)

api.get('/words/', Word.getAll)
api.get('/word/id/:id', Word.getById)
api.get('/word/:value', Word.getWord)
api.post('/word', Word.setWord)

api.get('/histories/', History.getAll)
api.get('/history/id/:id', History.getById)
api.post('/history', History.setHistory)

// api.all('/*', ctx => {
//     ctx.status = 404
//     ctx.body = { code: errors.NOT_FOUND }
//   })

router.use(api.routes())
router.use(api.allowedMethods())

module.exports = router