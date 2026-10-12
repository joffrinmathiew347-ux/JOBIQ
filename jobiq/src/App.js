import React, { useState } from "react";

import Skillanalysis from "./components/Skillanalysis";
import Skillgap from "./components/Skillgap";
import Roadmap from "./components/Roadmap";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Howitworks from "./components/Howitworks";
import Features from "./components/Features";
import Aboutus from "./components/Aboutus";

function App() {

    const [page, setPage] = useState("login");

    return (

        <>
        

            {page === "login" && (
                <Login setPage={setPage} />
            )}
            {page === "home" && (
                <Navbar setPage={setPage} />
            )}

            {page === "analysis" && (
                <Skillanalysis  setPage={setPage}/>
            )}

            {page === "gap" && (
                <Skillgap setPage={setPage}/>
                
            )}

            {page === "roadmap" && (
                <Roadmap />
            )}
            {page === "howitworks" && (
    <Howitworks setPage={setPage} />
)}
             {page === "features" && (
    <Features setPage={setPage} />
)}
 {page === "Aboutus" && (
    <Aboutus setPage={setPage} />
)}

        </>

    );
}

export default App;