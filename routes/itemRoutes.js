const express = require('express');
const ExpressError = require('../expressError');
const router = new express.Router();
const fs = require('fs'); //Node module for read/write
const path = require('path'); //Node utility for working with file paths

const ITEMS = require('../fakeDB');
const DATA_FILE = path.join(__dirname, '../data.json');

//-----------------------//
// READ WRITE FUNCTIONS  //
//-----------------------//

// Helper to read items
function readItems() {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
}

// Helper to write items
function writeItems(items) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(items, null, 2));
}

//---------------//
// CRUD ROUTES  //
//--------------//

router.get('/', (req, res) => {
    const items = readItems();
    res.json({ items });

    // Using the FakeDB
    // res.json({ items: ITEMS });
});

router.get('/:id', (req, res, next) => {
    const items = readItems();
    const item = items.find(i => i.id === +req.params.id);
    if (!item) {
        return next(new ExpressError("Item not found", 404))
    }
    res.json({ item });

    //------------//
    //USING fakeDB//
    //------------//
    // const item = ITEMS.find(i => i.id === +req.params.id);
    // if (!item) {
    //     return next(new ExpressError("Item not found", 404));
    // }
    // res.json({ item });
});

router.post('/', (req, res, next) => {
    const { name, price } = req.body;
    if (!name || price === undefined) {
        return next(new ExpressError("Name and price are required", 400));
    }
    const items = readItems();
    const newItem = { id: items.length + 1, name: name, price: price };
    items.push(newItem);
    writeItems(items);
    res.status(201).json({ item: newItem });

    //------------//
    //USING fakeDB//
    //------------//
    // const { name, price } = req.body;
    // if (!name || price === undefined) {
    //     return next(new ExpressError("Name and price are required", 400));
    // }
    // const newItem = { id: ITEMS.length + 1, name: name, price: price };
    // ITEMS.push(newItem);
    // res.status(201).json({ item: newItem });
});

router.patch("/:id", function (req, res) {
    const items = readItems();
    const foundItem = items.find(i => i.id === +req.params.id)
    if (foundItem === undefined) {
        throw new ExpressError("Item not found", 404);
    }
    foundItem.name = req.body.name;
    foundItem.price = req.body.price;
    writeItems(items);
    res.status(200).json({ item: foundItem });

    //------------//
    //USING fakeDB//
    //------------//
    // const foundItem = ITEMS.find(i => i.id === +req.params.id)
    // if (foundItem === undefined) {
    //     throw new ExpressError("Item not found", 404);
    // }
    // foundItem.name = req.body.name;
    // foundItem.price = req.body.price;
    // res.json({ item: foundItem });
});

router.delete("/:id", function (req, res) {
    const items = readItems();
    const foundItem = items.findIndex(i => i.id === +req.params.id)
    if (foundItem === -1) {
        throw new ExpressError("Item not found", 404)
    }
    items.splice(foundItem, 1)
    writeItems(items);
    res.status(200).json({ message: "Deleted" })

    //------------//
    //USING fakeDB//
    //------------//
    // const foundItem = ITEMS.findIndex(i => i.id === +req.params.id)
    // if (foundItem === -1) {
    //     throw new ExpressError("Item not found", 404)
    // }
    // ITEMS.splice(foundItem, 1)
    // res.json({ message: "Deleted" })
});



module.exports = router;

