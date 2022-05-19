
module.exports = class AuthError extends Error{
    status;
    errors;
    constructor(status, message, errors = []) {
        super(message);
        this.status = status
        this.errors = errors
    }
    static EmptyToken(){
        return new AuthError(401, 'Empty Token error')
    }
    static InvalidToken(){
        return new AuthError(401, 'Invalid Token error')
    }
}