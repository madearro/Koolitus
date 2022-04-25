const express = require('express')
const app = express()
const port = 3000

app.get('/katariinatuttnokk', (req, res) => {
    console.log('katariinatuttnokk')
  res.send('palume kassasse')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
