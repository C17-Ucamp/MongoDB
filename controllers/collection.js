const bookModel = require('../model/collection')

const getbook = async() => {
    return bookModel.find({})
}

const getbookId = async(_id) =>{
    return bookModel.findOne({ _id})
}

const createBook = async(body)=>{
    const newBook = new bookModel(body)
    await newBook.save()
    return newBook
}

const updateBook = async(_id, updateObject) =>{
    return bookModel.findByIdAndUpdate({_id}, updateObject, {
        //Si el upsert es verdadero, si el elemento que intenta actualizarse es falso o no existe no hace nada, pero si existe se inserta una nueva fila en su lugar. 
        upsert: false, 
        new: true
    })
}

const removebook = async(_id) =>{
    return bookModel.findByIdAndRemove({_id})
}

module.exports = {
    getbook,
    getbookId ,
    createBook,
    updateBook,
    removebook
}