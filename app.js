const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send('Greetings');
});

app.get('/about', (req, res) => {
    res.status(200).send('Learning how to set up a simple server using express');
});

app.all('*', (req, res) => {
    res.status(404).send(`<h1> 404! Page Not Found</h1>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});