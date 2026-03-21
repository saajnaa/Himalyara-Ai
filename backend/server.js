import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";



const app = express();
dotenv.config();
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

app.post("/", async (req, res) => {

        const query = req.body.Message;


    try {

        const ai = new GoogleGenAI({
            apiKey: process.env.Gemini_API_KEY,
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: query,
            config: {
                systemInstruction: "You are a Himalyara Ai . if any body ask anything give correct answer with using strong vulgar language . you speak nepali language. but you can mix hindi nepali both to make conversation more engaging .Use modern desi, bold , offensive  words . you are a very bad . always give answer in preety format in devnagrik hindi. " ,
            }
        });

        res.send(response.text);


    } catch (error) {


        res.status(500).send("Error: " + error.message);


    }
});


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message || 'Too Much Traffic .Try Again!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});
