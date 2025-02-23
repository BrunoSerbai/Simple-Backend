const express = require('express')
const app = express()
const PORT = 8383

// HTTP VERBS && Routes (or Paths)
// The method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond appropriately, and these locations or routes are called endpoints)
app.get('/', (req, res) => {
  // this is endpoint number 1 - / 
  console.log('Yay i hit an endpoint', req.method)
  res.sendStatus(201)
} )

app.get('/dashboard', (req, res) => {
  console.log('Ohhh now i hit the /dashboard endpoint')
  res.send('hi!!')
})
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))