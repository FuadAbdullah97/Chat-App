import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
// import fs  from  "node:fs"
// import mime  from  "mime-types"

const apiKey = process.env.GEMINI_API_KEY; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });

    try {
        const result = await chatSession.sendMessage(prompt);
        const responseText = result.response.text();
        console.log("Gemini Response:", responseText); // Log the response to the console
        return responseText; // You might still want to return it for potential future use
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return null; // Or throw the error, depending on how you want to handle failures
    }
}

export default run;