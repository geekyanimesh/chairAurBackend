import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true, lowecase: true},
        email: {type: String, required: true, unique: true},
        isActive: {type: Boolean},
        password : {type: String, required: true}
    }
)

export const User = mongoose.model("User",userSchema)

