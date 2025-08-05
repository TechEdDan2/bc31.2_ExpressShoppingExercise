const express = require('express');
const ExpressError = require('../expressError');
const router = new express.Router();
const ITEMS = require('../fakeDB');

router.get('/', (req, res) => {
    res.json({ items: ITEMS });
});

router.get('/:id', (req, res) => {
    const item = ITEMS.find(i => i.id === +req.params.id);
    res.json({ item });
});

router.post('/', (req, res) => {
    //For browser testing I am pulling data from the query string
    // const newItem = { id: ITEMS.length + 1, name: req.query.name, price: req.query.price }
    const newItem = { id: ITEMS.length + 1, name: req.body.name, price: req.body.price }
    ITEMS.push(newItem);
    res.status(201).json({ item: newItem });
});

router.patch("/:id", function (req, res) {
    const foundItem = ITEMS.find(i => i.id === +req.params.id)
    if (foundItem === undefined) {
        throw new ExpressError("Item not found", 404);
    }
    foundItem.name = req.body.name;
    foundItem.price = req.body.price;
    res.json({ item: foundItem });
});

router.delete("/:id", function (req, res) {
    const foundItem = ITEMS.findIndex(i => i.id === +req.params.id)
    if (foundItem === -1) {
        throw new ExpressError("Item not found", 404)
    }
    ITEMS.splice(foundItem, 1)
    res.json({ message: "Deleted" })
});



module.exports = router;

