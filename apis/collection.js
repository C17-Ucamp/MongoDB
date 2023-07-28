const express = require('express')
const router = express.Router()
const moongose = require('mongoose')
// const {booksController} = require('../controllers')
const { getbook,
    getbookId ,
    createBook,
    updateBook,
    removebook} = require('../controllers/collection')

router.get('/', async(req,res)=>{
    const books = await getbook()
    res.send(books)
})

router.get('/:id', async(req,res)=>{
    const {id} = req.params
    const books = await getbookId(id)

    if(!books){
        res.status(404)
        return res.send({
            message: `El libro con id ${id} no fue encontado`
        })
    }

    return res.send(books)
})

router.post('/', async(req,res)=>{
    const body = req.body

    try{
        const newBook = await createBook(body)

        res.status(201)
        res.send(newBook)
    } catch(error){
        res.status(400)
        return res.send({
            message: "Error de validación"
        })
    }
})

router.put('/:id', async(req,res) =>{
    const {id} = req.params
    const body = req.body

    const books = await updateBook(id, body)

    if(!books){
        res.status(404)
        return res.send({
            message: ` El libro con id ${id} no fue localizado`
        })
    }
    res.send(books)
})

router.delete('/:id', async(req,res) =>{
    const {id} = req.params

    const result = await removebook(id)

    return res.send(result)
})

module.exports = router