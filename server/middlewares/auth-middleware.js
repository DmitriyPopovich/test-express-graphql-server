const ApikeyService = require("../services/apikey");
const AuthError = require("../exceptions/auth-error");



const authMiddleware = (request, response, next) => {
    const white_list = []
    const black_list = []
    console.log(request.headers)
    console.log(request)
    console.log(request.body)

    const authorizationHeader = request.headers.authorization
    if(!authorizationHeader) return next(AuthError.EmptyToken())
    const accessToken = authorizationHeader.split(' ')[1]
    if(!accessToken) return next(AuthError.EmptyToken())
    const tokenData = ApikeyService.getKey(accessToken)
    if(!tokenData) return next(AuthError.EmptyToken())

    const auth = ApikeyService.getKey(tokenData)
    if (auth) {
        request.auth = true;
        next();
    }
    response.status(409).end();
};
module.exports = authMiddleware

// module.exports =  (req, res, next) => {
//     if(req.method === 'OPTIONS') next()
//     try{
//         const authorizationHeader = req.headers.authorization
//         if(!authorizationHeader) return next(ApiError.UnauthorizedError())
//         const accessToken = authorizationHeader.split(' ')[1]
//         if(!accessToken) return next(ApiError.UnauthorizedError())
//         const userData = tokenService.validateAccessToken(accessToken)
//         if(!userData.isActivated) return next(ApiError.UnactivatedError())
//         if(!userData) return next(ApiError.UnauthorizedError())
//         req.user = userData
//         next()
//     } catch (e){
//         return next(ApiError.UnauthorizedError())
//     }
// }