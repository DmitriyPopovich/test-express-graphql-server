
const paginator = (limit, page, data = []) =>{
    const count_total = data.length
    const count_pages = Math.ceil(count_total / limit)
    const startFrom = page * limit
    const result = data.slice(startFrom , startFrom + limit)
    return {
        count_total,
        count_pages,
        page: page,
        data: result
    }
}
module.exports = paginator