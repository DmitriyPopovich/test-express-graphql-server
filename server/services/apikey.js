const db = require('../connectors/sqlite-connector');
const DbError = require("../exceptions/db-error");

class ApikeyService {
    async getKeys(){
        try{
            const data = await db.fetch(`SELECT * FROM keys`);
            return data
        }catch (e){
            throw DbError.ConnectionError()
        }

    }
}
module.exports = new ApikeyService()