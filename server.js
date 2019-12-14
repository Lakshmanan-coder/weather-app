const express = require('express')
const app = express()
const fetch = require('node-fetch');
require('dotenv').config();

app.listen(5000 , ()=>{
console.log("server is running at 5000")
})
app.use(express.static('public'))

app.use(express.json({limit:'1mb'}))
app.get('/weatherstatus/:latlong', async (request,response)=>{
    const latlong = request.params.latlong.split(',')
    const lat =latlong[0];
    const long =latlong[1];

  
    console.log(lat)
    console.log(long)
    const apikey = process.env.API_KEY
    
    const api_url =`https://api.darksky.net/forecast/${apikey}/${lat},${long}`;
    
    const fetchResponse = await fetch(api_url)
    const data = await  fetchResponse.json()
     response.json(data)
     console.log(data)
              
})