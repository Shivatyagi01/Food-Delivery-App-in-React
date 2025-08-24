import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shivaworx:BPFYECgxiNCXgCLo@cluster0.dtwmrfg.mongodb.net/food-del').then(() => console.log("DB connected"))
}