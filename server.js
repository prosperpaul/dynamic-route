import express from "express";

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) =>{
     res.render('index', {title: 'Home Page', message:'Welcome to my dynamic webpage'}) 
})

app.get('/about', (req, res) =>{
  res.render('about', {title: 'About Us', description:'This is the about us page'}) 
})


app.listen(1000, () => {
  console.log(`Serve running at localjost:1000`)
})