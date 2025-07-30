import mongoose from "mongoose";

const userSchema = new mongoose.userSchema(
    {

    }
)

export const User = mongoose.model("User",userSchema)