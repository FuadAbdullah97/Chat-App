// Imported Packages
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//Imported files
import authRoute from "./routes/authRoute.js";
import messageRoute from "./routes/messageRoute.js";
import protectRoute from "./middleware/protectRoute.js";


//Imported Database
import connectionMongoDB from "./db/database.js";
import userRoute from "./routes/userRoute.js";


//Middlewares
dotenv.config();
const PORT = process.env.PORT ;
const app = express();
app.use(express.json());
app.use(cookieParser());


//Default Route to Check Server and user
app.get('/', (req, res) =>{
    res.send("hello World")
})
app.get('/protected', protectRoute, (req, res) => {
    res.status(200).json({ message: 'You are authenticated!' });
});


//Main routers
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute );







// Server listen status with database
app.listen(
    PORT,()=>{
        connectionMongoDB()
        console.log(`Server started on port ${PORT}`);
    }
)