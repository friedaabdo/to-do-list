const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const listSchema = new Schema(
    {
        "todo": String,
        "completeBy": {type: Date}
    }
)

const List = mongoose.model('List', listSchema)
module.exports = List