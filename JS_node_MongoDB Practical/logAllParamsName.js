const express = require('express');
const app = express();

app.use(express.json()); // for parsing JSON body

// ✅ SAFELY log parameter names middleware
app.use((req, res, next) => {
    console.log('--- Parameter Names Log ---');

    try {
        const routeParams = Object.keys(req.params || {});
        if (routeParams.length) {
            console.log('Route Params:', routeParams);
        }

        const queryParams = Object.keys(req.query || {});
        if (queryParams.length) {
            console.log('Query Params:', queryParams);
        }

        const bodyParams = Object.keys(req.body || {});
        if (bodyParams.length) {
            console.log('Body Params:', bodyParams);
        }

        console.log('---------------------------');
    } catch (err) {
        console.error('Logging Middleware Error:', err.message);
    }

    next();
});

app.get('/user/:id', (req, res) => {
    res.send('User route');
});

app.get('/search', (req, res) => {
    res.send('Search route');
});

app.post('/submit', (req, res) => {
    res.send('Form submitted');
});

app.listen(3000, () => {
    console.log('on 3000');
});
