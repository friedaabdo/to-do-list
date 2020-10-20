//environmental vars
require('dotenv').config()
const {PORT = 3500, NODE_ENV = "development"}= process.env

//CORS
const cors = require("cors");
const corsOptions = require("./configs/cors.js");

//EXPRESS
const express = require('express')
const app = express()

//Morgan
const logger = require('morgan')
app.use(logger('dev'));

//other middleware
// NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        status:200,
        msg: 'you have hit the default route...nothing to see here'
    })
})

// const listsController = require('./controllers/lists.js')
// app.use('/allLists', listsController)

// const categoriesController = require('./controllers/categories.js')
// app.use('/categories',categoriesController)

app.listen(PORT, () => {
    console.log(`listening in on port: ${PORT}`)
})