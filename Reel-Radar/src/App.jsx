import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
// import Header from "./components/Header"; // Uncomment when Header is ready

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* Uncomment when Header is defined */}
            {/* <Header /> */}
            <div
                style={{
                    paddingTop: "120px", // Adjust based on Header height
                    paddingBottom: "60px", // Matches Footer height
                    textAlign: "center",
                }}
            >
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
