const express = require('express')
const { route } = require('./Routes/main')
const app = express()
app.use(express.json())
app.use('/api', route)
app.listen(5000, () => {
    console.log('server started at 5000')
})