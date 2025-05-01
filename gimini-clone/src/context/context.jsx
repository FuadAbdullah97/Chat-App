import { createContext, useState, useEffect } from "react";
import run from "../config/gemini.js"; // Import the 'run' function

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    // const onSent = async (prompt) => { // 'prompt' here will come from your 'Main' component
    //     setLoading(true);
    //     try {
    //         const response = await run(prompt); // Pass the 'prompt' to the 'run' function
    //         setResultData(response);
    //         setShowResult(true);
    //         recentPrompt(prompt);
    //     } catch (error) {
    //         console.error("Error running the model:", error);
    //         // Optionally set an error state here
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const onSent = async (prompt) =>
    {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(prompt)
        setPrevPrompt(prev=> [...prev,input])

        const response = await run(input)
        setResultData(response)
        setLoading(false)
        setInput(" ")

    }


    const ContextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        setShowResult,
    };

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;