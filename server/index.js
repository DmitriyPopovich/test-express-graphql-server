const express = require('express')
const cors = require('cors')
require('dotenv').config()
const {errorMsg, successMsg} = require('./helpers/chalk')
const commitsRouter = require('./router/commits-router')

const PORT = process.env.PORT
const app = express()
// app.use(cors())


app.use('/', commitsRouter)


const start = async () => {
    try{
        app.listen(PORT, 'localhost',(error)=>{
            error ? console.log(errorMsg(error)) :
                console.log(successMsg(`listening port ${PORT}`))
        })
    }
    catch (err){
        console.log(errorMsg(err))
    }
}
start()
    .then((res)=>{console.log(successMsg('Server started'))})