const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(3000);
// Middleware & static files
app.use(express.static('public'))

app.use(morgan('dev'));
// View engine 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const blogs = [
    { title: 'First post', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Second post', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Third post', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});