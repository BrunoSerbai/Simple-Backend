const express = require('express')
const app = express()
const PORT = 8383

let data = ["Bruno", "Serbai"]

// Middleware - the command below configures the server to expect json data
app.use(express.json())

// ENDPOINTS - HTTP VERBS && Routes (or Paths)
// The method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond appropriately, and these locations or routes are called endpoints)

//  Type 1 - Website endpoints - Endpoints for sending back html

app.get('/', (req, res) => {
  res.send(`
    <body style="background:pink; color:blue;">
    <h1>DATA:</h1>
      <p>${JSON.stringify(data)}</p>
      <a href="/dashboard">Dashboard</a>
    </body>
    `)
})

app.get('/dashboard', (req, res) => {
  res.send(`
    <body>
    <h1>Dashboard</h1>
    <a href="/">Home</a>
    </body>`)
  console.log('Ohhh now i hit the /dashboard endpoint')
})


// Type 2 - API endpoints  

//CRUD - Create-post Read-get Update-put and Delete-delete

app.get('/api/data', (req, res) => {
  console.log('This one was for data')
  res.send(data)
})

app.post('/api/data', (req, res) => {
  // client wants to create a user (click on sign up button)
  // the client clicks the button after entering their credentials, and their browser is wired up to send out a network request to the server to handle that action
  
  const newEntry = req.body
  console.log(newEntry)
  data.push(newEntry.name)
  res.sendStatus(201)
})

app.delete('/api/data',(req, res) => {
  data.pop()
  console.log('We deleted the element off the end of the array')
  res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))