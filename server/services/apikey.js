const conector_db = require('../connectors/sqlite-connector');
const DbError = require("../exceptions/db-error");

class ApikeyService {
    async getKeys(){
        try{
            const data = await conector_db.fetch(`SELECT * FROM keys`);
            return data
        }catch (e){
            throw DbError.ConnectionError()
        }
    }
    async getKey(apikey){
        try{
            const data = await conector_db.fetch(`SELECT * FROM keys WHERE api_key='${apikey}'`);
            return data
        }catch (e){
            throw DbError.ConnectionError()
        }
    }
    async createKey(apikey){
        try{
            await conector_db.run(`INSERT INTO keys (api_key) VALUES ('${apikey}')`);
            const data = await this.getKey(apikey)
            return data
        }catch (e){
            throw DbError.ConnectionError()
        }
    }
}
module.exports = new ApikeyService()