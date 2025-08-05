/**
 * The middleware.js file contains custom middleware functions for the Express application.
 * 
 * This file exports a logger function that logs the HTTP method and path of incoming requests.
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function logger(req, res, next) {
    console.log(`Received a ${req.method} request to ${req.path}`);
}

