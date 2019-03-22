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
    var queryString = 'INSERT INTO shipping_info (card_name, card_number, cvv, zipcode, user_id) VALUES (?, ?, ?, ?, ?)';
    db.query(queryString, [req.body.cardName, req.body.cardNumber, req.body.cvv, req.body.zipcode, req.body.userID], (err, data) => {
        if (err) return res.status(500).send(err);

        res.send(data);
    })
})




app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
});


