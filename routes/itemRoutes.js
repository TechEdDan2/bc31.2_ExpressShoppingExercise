const express = require('express');
const ExpressError = require('../expressError');
const router = new express.Router();
const ITEMS = require('../fakeDB');

router.get('/', (req, res) => {
    res.json({ items: ITEMS });
});

router.get('/:id', (req, res, next) => {
    const item = ITEMS.find(i => i.id === +req.params.id);
    if (!item) {
        return next(new ExpressError("Item not found", 404));
    }
    res.json({ item });
});

router.post('/', (req, res, next) => {
    const { name, price } = req.body;
    if (!name || price === undefined) {
        return next(new ExpressError("Name and price are required", 400));
    }
    const newItem = { id: ITEMS.length + 1, name: name, price: price };
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

