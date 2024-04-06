require('dotenv').config()
require("./database/config/index")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(bodyParser.json())



app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

