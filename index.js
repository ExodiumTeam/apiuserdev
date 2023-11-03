require('dotenv/config')
const express = require('express')
const http = require('http')
const { router } = require('./src/routes/router')
const path = require('path')

const app = express()
const port = process.env.PORT

app.use(express.static(path.join(__dirname, 'src/public')))
app.use(express.json())
app.use(router)

http.createServer(app).listen(port, () => {
  console.log(`App is running on port ${port}`)
})
