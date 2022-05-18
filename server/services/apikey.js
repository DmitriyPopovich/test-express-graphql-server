const ON_PAGE = Number(process.env.COUNT_ON_PAGE)
const db = require('../connectors/sqlite-connector');
const DbError = require("../exceptions/db-error");

class ApikeyService {
    async getKeys(){
        try{
            const data = await db.fetch(`SELECT * FROM keys`);
            console.log(data)
            return data
        }catch (e){
            throw DbError.ConnectionError()
        }

    }
}
module.exports = new ApikeyService()