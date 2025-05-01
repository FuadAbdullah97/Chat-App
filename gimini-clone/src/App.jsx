import React from 'react';
import SideBar from "./components/Sidebar/SideBar.jsx";
import Main from "./components/Main/Main.jsx";


function App() {
    return (
        <>
            <div style={{display: 'flex'}}>
            <SideBar/>
            <Main/>
            </div>
        </>
    );
}

export default App;