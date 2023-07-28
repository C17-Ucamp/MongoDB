const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./db/mongodb')

const router = require('./apis')

app.use(express.json())
app.use(cors())


app.use(router)

app.get('/', (req,res)=>{
    res.send('Servido vivo')
})


const PORT = 5003

app.listen(PORT, ()=>{
    console.log(`Servidor conectado al puerto ${PORT}`)
})