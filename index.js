const express = require('express');
const app = express();
const fetch = require("node-fetch");

app.set("view engine", "ejs");
app.use(express.static("public"));


//root route
app.get('/', (req, res) => {
  res.render('home')
});

//mercury
app.get('/mercury', (req, res) => {
  res.render('mercury')
});

//venus
app.get('/venus', (req, res) => {
  res.render('venus')
});

//mars
app.get('/mars', (req, res) => {
  res.render('mars')
});


app.get('/earth', async (req, res) => {
  let url = "https://api.unsplash.com/photos/random/?client_id=VHq6MKWVxfAydvO4deJoS-6K60vrfmGNu-wnZzc5o9c&featured=true&query=planet%20earth";

  let response = await fetch(url);
  let data = await response.json();
  let imageUrl = data.urls.regular;

  res.render('earth', { "randomImage": imageUrl });
});

//earth
app.get('/earth', (req, res) => {
  res.render('earth')
});


//saturn
app.get('/saturn', (req, res) => {
  res.render('saturn')
});


app.get('/nasa', async (req, res) => {
  let month = req.query.month;
  let date = req.query.date;
  let year = req.query.year;

  let picDate = `${year}-${month}-${date}`;

  let url = `https://api.nasa.gov/planetary/apod?api_key=9mUzIkhlZCZaOoMfspg7jMmwZCZ4LiRHtkgkambD&date=${picDate}`;
  //let url = "https://api.nasa.gov/planetary/apod?api_key=9mUzIkhlZCZaOoMfspg7jMmwZCZ4LiRHtkgkambD&date=2022-10-12";


  let response = await fetch(url);
  let data = await response.json();

  res.render('nasa', { "data": data });
});
//nasa


app.get('/nasa_media/:picDate', async (req, res) => {

  let picDate = req.params.picDate;

  let url = `https://api.nasa.gov/planetary/apod?api_key=9mUzIkhlZCZaOoMfspg7jMmwZCZ4LiRHtkgkambD&date=${picDate}`;



  let response = await fetch(url);
  let data = await response.json();

  res.render('nasa', { "data": data });
});

//nasa
app.listen(3000, () => {
  console.log('server started');
});