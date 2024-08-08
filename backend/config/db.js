import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ranirangari2018:ranirangari@cluster0.odm4c1o.mongodb.net/food-fusion').then(()=>console.log("DB Connected")
    );
}