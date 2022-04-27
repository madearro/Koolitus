const express = require('express')
const app = express()
const port = 3000

app.get('/katariinatuttnokk', (req, res) => {
    console.log('tuutu')
  res.send('tubli kiisu')
})

app.listen(port, () => {
  console.log(`nojah ${port}`)
})
