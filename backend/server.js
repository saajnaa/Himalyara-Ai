import express from "express";
import cors from "cors";
import gemini from "./services/GeminiAi.js";


const app = express();
const PORT = process.env.PORT || 5000;




//============================ middleware handler==========================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form data




// ============================== GET Request Handler =============================
app.get("/", (req, res) => {

    res.send("Welcome to Himlyara AI Server! Send a POST request with your message to get a response from the AI.");

});


//=========================== POST Request Handler ========================

app.post("/api", gemini);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message || 'Too Much Traffic .Try Again!' });
});


// Export app for Vercel
export default app;