require('dotenv').config({path: './config/.env'})

const http = require('http')
const express = require('express')
let app = express()
const passport = require('passport')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/database')

const indexroutes = require('./routes/indexroutes')
const homeroutes = require('./routes/homeroutes')
const authroutes = require('./routes/authroutes')



connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended : true}))
app.use(express.json())

// Sessions
app.use(
    session({
      secret: 'akeyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    })
  )



//passport config

require('./config/passport')(passport)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//routes

app.use('/', indexroutes)
app.use('/home', homeroutes)
app.use('/auth', authroutes)


app.listen(process.env.PORT, () => console.log(`app running on ${process.env.PORT}`))