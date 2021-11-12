const express = require("express");
const HttpCode = require("./error/HttpCode");
/**
 * 
 * @param {HttpCode} err 
 * @param {express.Request} req
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
function errorMiddleware(err, req, res, next) {
    res.status(err.statusCode).json(err.getData());
}

module.exports = errorMiddleware;