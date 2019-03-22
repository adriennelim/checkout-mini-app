const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

const app = express();
const db = require('./db/index');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/signup', (req, res, next) => {
    var queryString = 'SELECT id FROM users WHERE name = ? && password = ? && email = ?';
    db.query(queryString, [req.body.name, req.body.password, req.body.email], (err, data) => {
        if(err) return res.status(500).send(err);
        res.send(data);
    });
});

app.post('/signup', (req, res, next) => {
    var queryString = 'INSERT INTO users (name, password, email) VALUES (?, ?, ?)';
    db.query(queryString, [req.body.name, req.body.password, req.body.email], (err, data) => {
        if (err) return res.status(500).send(err);

        res.send(data); //may not be required
    })
});

app.post('/shippingInfo', (req, res, next) => {
    var queryString = 'INSERT INTO shipping_info (address_line_one, address_line_two, city, zipcode, phone, user_id) VALUES (?, ?, ?, ?, ?)';
    db.query(queryString, [req.body.address_line_one, req.body.address_line_two, req.body.city, req.body.zipcode, req.body.phone, req.body.userID], (err, data) => {
        if (err) return res.status(500).send(err);

        res.send(data);
    })
});

app.post('/creditCard', (req, res, next) => {
    var queryString = 'INSERT INTO shipping_info (card_name, card_number, cvv, zipcode, user_id) VALUES (?, ?, ?, ?, ?)';
    db.query(queryString, [req.body.cardName, req.body.cardNumber, req.body.cvv, req.body.zipcode, req.body.userID], (err, data) => {
        if (err) return res.status(500).send(err);

        res.send(data);
    })
})


app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
});


