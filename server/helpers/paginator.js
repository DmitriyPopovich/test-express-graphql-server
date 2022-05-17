
const paginator = (limit, offset, data = []) =>{
    const count_total = data.length
    const count_pages = Math.ceil(count_total / limit)
    const startFrom = offset * limit
    const result = data.slice(startFrom , startFrom + limit)
    return {
        count_total,
        count_pages,
        page: offset,
        data: result
    }
}
module.exports = paginator