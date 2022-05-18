
module.exports = class DbError extends Error{
    status;
    errors;
    constructor(status, message, errors = []) {
        super(message);
        this.status = status
        this.errors = errors
    }
    static ConnectionError(){
        return new DbError(401, 'Connection connectors error')
    }
}