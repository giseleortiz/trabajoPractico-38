const express = require('express');
const path = require('path');


const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const app = express();

const methodOverride = require('method-override')

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/movies',moviesRoutes);
app.use(genresRoutes);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
