require('dotenv').config({path: './config/.env'})

const http = require('http')
const express = require('express')
let app = express()
const passport = require('passport')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/database')




connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended : true}))
app.use(express.json())

// Sessions
app.use(
    session({
      secret: 'applebob',
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
const indexroutes = require('./routes/indexroutes')
app.use('/', indexroutes)

const homeroutes = require('./routes/homeroutes')
app.use('/home', homeroutes)

const authroutes = require('./routes/authroutes')
app.use('/auth', authroutes)


app.listen(process.env.PORT, () => console.log(`app running on ${process.env.PORT}`))