const _PORT=8081
const server=require('./server/index')
const express=require('express')
const morgan = require('morgan')
const app=express()

app.use('/static',express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))
app.use('/', server)

app.listen(_PORT)
