export default class BaseResponse {
    constructor() {};
    /**
     * @desc    Send any success response
     *
     * @param   {string} message
     * @param   {object | array} results
     * @param   {number} statusCode
     */
    success = (statusCode, message, results) => {
        return {
            code: statusCode,
            message: message,
            status: true,
            results
        }
    }

    /**
     * @desc    Send any success response
     *
     * @param   {string} message
     * @param   {object | array} results
     * @param   {number} statusCode
     */
    fail = (statusCode, message, results) => {
        return {
            code: statusCode,
            message: message,
            status: false,
            results
        }
    }
}