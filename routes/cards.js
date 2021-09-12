const router = require('express').Router();
const Cards = require('../models/cardsModel');

router.post("/", async (req, res) => {
    const cardsModel = req.body;
    
    Cards.create(cardsModel, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

router.get("/", (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

module.exports = router;