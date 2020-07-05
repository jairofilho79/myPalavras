(async () => {
    const { MongoClient } = require('mongodb');
    const { promisify } = require('util')

    // Connection URL
    const url = 'mongodb://localhost:27017';

    // Database Name
    const dbName = 'testeMongo';

    const connect = MongoClient.connect

    async function funcWithConnect(func, params) {
        try {
            const client = await connect(url, { useNewUrlParser: true })
            const db = client.db(dbName)
            try{
                return eval(func)(db, ...params)
            } catch(e) {
                console.error('Failed to execute ' + func)
                console.log(e)
            }
            client.close()
        }
        catch(e) {
            console.error('Failed to connect to DB')
            console.log(e)
        }
    }

    async function inserir(db, nome) {
        db.collection('Nome').insertOne({name: nome})
    }

    async function find(db,collection,subject) {
       return db.collection(collection).find(subject).toArray()
    //    return db.collection(collection).findOne(subject)
    }

    // funcWithConnect('inserir', ['jairo filho é foda!'])
    console.log(await funcWithConnect('find', ['Nome',{}]))



})()
