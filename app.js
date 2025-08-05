const express = require('express');
const ExpressError = require('./expressError');

const itemRoutes = require('./routes/itemRoutes');
const mw = require('./middleware');

const app = express();

app.use(express.json());


//------------------//
// Standard Routes //
// --------------- //
// Base Route for a Homepage
app.get('/', (req, res) => {
    return res.send("<h1>Welcome to the <i>Express</i> Shopping List API!</h1> <p>Visit /items to see the list of items.</p>");
});

// --------------------- //
// Express Router Routes //
// --------------------- //
app.use('/items', itemRoutes);

// --------------------- //
// Error Handling Routes //
// --------------------- //

// Dealing with the favicon issue
app.get('/favicon.ico', (req, res) => {
    res.sendStatus(204);
})

//404 handler
app.use(function (req, res) {
    return new ExpressError("Not Found", 404);
});

// Generic Error Handler
app.use(function (err, req, res, next) {
    // The default status is 500 Internal Server Error
    let status = err.status || 500;

    //Set the status and alert the user
    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });
});

module.exports = app;