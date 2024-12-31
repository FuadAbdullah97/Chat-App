import mongoose from "mongoose";
const connectionMongoDB  =  async ()=>{
try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Database Successfully Connectd');
} catch (error) {
    console.log("Database Connetion Error",error.message);
}
}

export default connectionMongoDB ;