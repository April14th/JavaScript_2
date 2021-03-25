const express = require('express');
const fs = require('fs');

const writer = require('./utils/writer');
const Basket = require('./services/basket-service');

const server = express();

server.use('/', express.static('public'));
server.use(express.json());

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (error, data) => {
        if (!error) {
            res.json(JSON.parse(data));
        }
    })
})

server.get('/basket', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (error, data) => {
        if (!error) {
            res.json(JSON.parse(data));
        }
    })
})

server.post('/basket', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (error, data) => {
        if (!error) {
            let oldB = JSON.parse(data);
            let newB = Basket.add(oldB, req.body);
            writer('./server/db/basket.json', newB)
                .then(ans => {
                    if (ans) {
                        res.json({ status: true })
                    } else {
                        res.sendStatus(500);
                    }
                }) 
        }
    })
})

server.put('/basket/:id/:choosenSize', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (error, data) => {
        if (!error) {
            let oldB = JSON.parse(data);
            let newB = Basket.change(oldB, req.params.id, req.params.choosenSize, req.body.amount);
            writer('./server/db/basket.json', newB)
                .then(ans => {
                    if (ans) {
                        res.json({ status: true })
                    } else {
                        res.sendStatus(500);
                    }
                }) 
        }
    })
})

server.delete('/basket/:id/:choosenSize', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (error, data) => {
        if (!error) {
            let oldB = JSON.parse(data);
            let newB = Basket.delete(oldB, req.params.id, req.params.choosenSize);
            writer('./server/db/basket.json', newB)
                .then(ans => {
                    if (ans) {
                        res.json({ status: true })
                    } else {
                        res.sendStatus(500);
                    }
                }) 
        }
    })
})

server.delete('/basket', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (error, data) => {
        if (!error) {
            let oldB = JSON.parse(data);
            let newB = Basket.delete(oldB);
            writer('./server/db/basket.json', newB)
                .then(ans => {
                    if (ans) {
                        res.json({ status: true })
                    } else {
                        res.sendStatus(500);
                    }
                }) 
        }
    })
})

const newDirName = __dirname.slice(0, -7);

server.get('*', function(req, res) {
    res.sendFile(newDirName + '/public/index.html');
});

server.listen(3000);