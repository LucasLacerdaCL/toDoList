const express = require('express')
const bodyParser = require('body-parser')  
const allowCors = require('./cors') 

const port = 3003
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`Server running on port ${port}`)
})

module.exports = server