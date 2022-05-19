
const DbError = require("../exceptions/db-error");
const ApiKeyModel = require("../models/apikey");

class ApikeyServiceOrm {
    async getKeys(){
        try{
            const data = await ApiKeyModel.findAll()
            return data
        }catch (e){
            throw DbError.ConnectionError()
        }
    }
    async getKey(apikey){
        try{
            const data = await ApiKeyModel.findAll(
                {
                    where: {
                        api_key: apikey,
                    },
                }
            )
            return data
        }catch (e){
            throw DbError.ConnectionError()
        }
    }
    async createKey(apikey){
        try{
            const new_key = ApiKeyModel.build({ api_key: apikey })
            await new_key.save()
            return await this.getKey(apikey)
        }catch (e){
            throw DbError.ConnectionError()
        }
    }
}
module.exports = new ApikeyServiceOrm()