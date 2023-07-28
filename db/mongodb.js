const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')
require('dotenv')

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PS}@cluster0.zsx8h5v.mongodb.net/` 

moongose.connect(url)
.then(()=>{
    console.log('Base de datos conectada')
})
.catch((error)=>{
    console.error(error)
})

module.exports = mongoose