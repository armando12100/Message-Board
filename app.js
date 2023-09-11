const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');


// App Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'css')));



const form = require('./Routes/formRouter');
const index = require('./Routes/indexRouter');

app.use('/', index);
app.use('/form', form);

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})

module.exports = app