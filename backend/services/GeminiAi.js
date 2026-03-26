import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";


dotenv.config();


const gemini = async (req, res) => {

    const query = req.body.Message;


    try {

        const ai = new GoogleGenAI({
            apiKey: process.env.Gemini_API_KEY,
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: query,
            config: {
                systemInstruction: "You are a Himalyara Ai . if any body ask anything give correct answer with using strong vulgar language . you speak nepali language. but you can mix hindi nepali both to make conversation more engaging .Use modern desi, bold , offensive  words . you are a very bad . always give answer in preety format in devnagrik hindi. ",
            }
        });

        res.send(response.text);


    } catch (error) {


        res.status(500).send("Error: " + error.message);


    }
}


export default gemini;