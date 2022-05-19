const express = require('express')
const cors = require('cors')
require('dotenv').config()
const {errorMsg, successMsg} = require('./helpers/chalk')
const router = require('./router/router')
const authMiddleware = require("./middlewares/auth-middleware");
const errorMiddleware = require("./middlewares/error-middleware");

const PORT = process.env.PORT
const app = express()
// app.use(cors())


// app.use(authMiddleware)
app.use('/', router)
app.use(errorMiddleware)

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