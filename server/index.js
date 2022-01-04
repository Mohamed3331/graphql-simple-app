const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./models/schema')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

const app = express()

mongoose.connect('mongodb+srv://Mohamed:Mo3i2bnm@cluster0.jpvlo.mongodb.net/goodReads?retryWrites=true&w=majority').then(() => console.log('Database Connected')).catch((e) => console.log(e))

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

app.listen(PORT, () => console.log('server running on port ' + PORT))

