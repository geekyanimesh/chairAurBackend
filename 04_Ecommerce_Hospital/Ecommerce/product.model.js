import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
    {
       name: {type: String, required: true},
       description: {type: String, required: true},
       productImage: {type: String, required: true}, // stored in cloudinary and a url is pasted here
       price: {type: Number, default: 0 },
       stock: {type: Number, default: 0},
       category: {type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true},
       owner: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    },
    {timestamps: true}
)

export const Product = mongoose.model("Product",productSchema)
