const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const categorySchema = new Schema(
    {
        "category": String,
        "list": [
            {ref: 'List',type: Schema.Types.ObjectId}
        ]
    }
)

const Category = mongoose.model('Category', categorySchema)
module.exports = Category