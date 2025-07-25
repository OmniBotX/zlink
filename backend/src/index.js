import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";


dotenv.config();

const app = express();

const PORT = process.env.PORT

 app.use(cookieParser());
app.use(cors({

    origin: "http://localhost:5173",
    credentials: true,



}));

app.use(express.json({ limit: "10mb" })); // or higher if needed
app.use(express.urlencoded({ limit: "10mb", extended: true }));



app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);



app.listen(PORT, () => {
    console.log("server UP on port :" + PORT);
    connectDB();
});



