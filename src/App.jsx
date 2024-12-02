import { useState } from "react";

// Components
import Button from "./components/Button";

// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const linguaggi = [
        {
            id: 1,
            nome: "HTML",
            descrizione: "linguaggio 1",
        },
        {
            id: 2,
            nome: "CSS",
            descrizione: "linguaggio 2",
        },
        {
            id: 3,
            nome: "JavaScript",
            descrizione: "linguaggio 3",
        },
        {
            id: 4,
            nome: "Node.js",
            descrizione: "linguaggio 4",
        },
        {
            id: 5,
            nome: "Express",
            descrizione: "linguaggio 5",
        },
        {
            id: 6,
            nome: "ReactJS",
            descrizione: "linguaggio 6",
        },
    ];

    return (
        <>
            {/* Flex Container */}
            <main className="d-flex flex-column align-items-center mt-5">
                {/* Title */}
                <h1>Learn Web development</h1>

                {/* Buttons Container */}
                <div className="mt-4">
                    {linguaggi.map((linguaggio) => (
                        <Button key={linguaggio.id} btnText={linguaggio.nome} />
                    ))}
                </div>
            </main>
        </>
    );
}

export default App;
