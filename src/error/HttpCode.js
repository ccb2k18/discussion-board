

module.exports = class HttpCode extends Error {

    constructor(statusCode, status, message) {
        super(message);
        /** @type {string} */
        this.status = status;
        /** @type {number} */
        this.statusCode = statusCode;
    }

    getData() {
        return {
            statusCode: this.statusCode,
            status: this.status,
            message: this.message
        };
    }
}