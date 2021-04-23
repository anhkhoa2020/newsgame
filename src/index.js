const express = require('express')
const morgan = require('morgan')
const exphbs  = require('express-handlebars')
const app = express()
const path = require('path')
const port = 3000

//HTTP Logger
app.use(morgan('combined'))

// set template engine
app.engine('.hbs', exphbs({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.set('views', path.join(__dirname, 'resources/views'))













app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})