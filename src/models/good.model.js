const  mongoose = require("mongoose")
const Schema = mongoose.Schema

const  GoodSchema = new Schema({
    name: {
        type: String,
        required:  true
    },
    description: {
        type: String,
        required:  true
    },
    price: {
        type: Number,
        required:  true
    }
})

mongoose.model("good", GoodSchema )