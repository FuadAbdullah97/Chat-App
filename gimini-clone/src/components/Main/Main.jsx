import React, { useContext, useState } from 'react'; // Make sure useContext is imported
import '../Main/Main.css';
import { assets } from '../../assets/assets.js';
import { Context } from '../../context/context.jsx';

function Main() {
    const { onSent, showResult, loading, resultData, setInput, input, recentPrompt } = useContext(Context);
    // We'll use the 'input' state from the context directly for the input field
    // No need for separate local state 'currentInput' in this simplified approach

    const handleInputChange = (event) => {
        setInput(event.target.value); // Update the context's input state
    };

    const handleSend = () => {
        if (input.trim()) {
            onSent(input); // Call 'onSent' with the 'input' value from context
            setInput('Enter a prompt here...'); // Clear the input field in the context after sending
        }
    };

    return (
        <div className='main'>
            <div className="nav">
                <p>Gimini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">

                {
                    !showResult ?
                        <>
                            <div className="main-greet">
                                <p><span>Hello Dev</span></p>
                            </div>
                            <div className="cards">
                                {/* ... Your existing card components ... */}
                                <div className="card">
                                    <p>Briefly summarize this concept : urban Planing</p>
                                    <img src={assets.compass_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Briefly summarize this concept : urban Planing</p>
                                    <img src={assets.compass_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Briefly summarize this concept : urban Planing</p>
                                    <img src={assets.compass_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Briefly summarize this concept : urban Planing</p>
                                    <img src={assets.compass_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Briefly summarize this concept : urban Planing</p>
                                    <img src={assets.compass_icon} alt="" />
                                </div>
                            </div>
                        </>
                    : <div className='result'>
                            <div className="result-question">

                                <p>{recentPrompt}</p>
                                <img src={assets.user_icon} alt=""/>
                            </div>
                            <div className="reslt-asnwer">
                                <img src={assets.gemini_icon} alt=""/>
                                { loading
                                    ? 'loading...'
                                : <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                            }

                            </div>
                        </div>


                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            type="text"
                                placeholder='Enter a prompt here...'
                                value={input} // Use the 'input' state from context
                                onChange={handleInputChange}
                                onKeyDown={(event) =>{
                                    if (event.key === 'Enter') {
                                        handleSend();}

                                }}
                            />
                            <div className="searchBox-bottons">
                                <img src={assets.gallery_icon} alt="" />
                                <img src={assets.mic_icon} alt="" />
                                <img
                                    src={assets.send_icon}
                                    alt=""
                                    onClick={handleSend} // Call 'handleSend' which uses the context 'input'
                                    style={{ cursor: 'pointer' }} // Provide visual feedback
                                />
                            </div>
                        </div>
                        <div className="bottom-info">
                            <p>Gemini can make mistakes, so double-check it</p>
                        </div>
                    </div>
                </div>

                {/*{loading && <p>Loading...</p>} /!* Display loading indicator *!/*/}
                {/*{showResult && resultData && (*/}
                {/*    <div className="result-container">*/}
                {/*        <h3>Result:</h3>*/}
                {/*       console.lo*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>

    );
}

export default Main;