
const paginator = (limit, page, data = []) =>{
    const count_total = data.length
    const count_pages = Math.ceil(count_total / limit)
    const startFrom = page * limit - limit
    const endFrom = Number(startFrom) + Number(limit)
    const result = data.slice(startFrom , endFrom)
    return {
        count_total,
        count_pages,
        page: page,
        data: result
    }
}
module.exports = paginator