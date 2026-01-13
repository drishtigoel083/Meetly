import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import path from "path"
import cors from "cors"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;

//API routes

app.get("/book", (req,res) => {
    res.send("book API");
})

app.get("/cat", (req,res) => {
    res.send("cat is meowing");
})

//make our app ready for deployment
//This code makes the Express backend serve the built React frontend, so the whole app can be deployed as a single service.
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    
    app.get("/{*any}", (req,res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
