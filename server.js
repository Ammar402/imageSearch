// server.js
// where your node app starts

// init project
const cors = require ('cors')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const express = require('express')
const app = express()
const Bing = require ('node-bing-api')({accKey: '9886dad1ee214a819e970fe1a106e5d9'});


app.use(bodyParser.json());
app.use(cors());
 
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

app.get('/api/imagesearch/:searchVal*',function (req,res,next)
      {
        var searchVal = req.params.searchVal;
        var offset = req.query.offset;
        
        return res.json(
        {
          searchVal,
          offset
        });

      });
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// Simple in-memory store
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
]

app.get("/dreams", (request, response) => {
  response.send(dreams)
})

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", (request, response) => {
  dreams.push(request.query.dream)
  response.sendStatus(200)
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
