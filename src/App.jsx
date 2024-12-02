import { useState } from "react";

// Components
import Button from "./components/Button";

// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const [linguaggi, setLinguaggi] = useState([
        {
            id: 1,
            nome: "HTML",
            descrizione: "linguaggio 1",
            activeState: true,
        },
        {
            id: 2,
            nome: "CSS",
            descrizione: "linguaggio 2",
            activeState: false,
        },
        {
            id: 3,
            nome: "JavaScript",
            descrizione: "linguaggio 3",
            activeState: false,
        },
        {
            id: 4,
            nome: "Node.js",
            descrizione: "linguaggio 4",
            activeState: false,
        },
        {
            id: 5,
            nome: "Express",
            descrizione: "linguaggio 5",
            activeState: false,
        },
        {
            id: 6,
            nome: "ReactJS",
            descrizione: "linguaggio 6",
            activeState: false,
        },
    ]);

    function languagesButtonStatusChange(index) {
        const updatedData = [...linguaggi];

        updatedData.map((element, actualIndex) => {
            actualIndex === index
                ? (element.activeState = true)
                : (element.activeState = false);
        });

        setLinguaggi(updatedData);
    }

    return (
        <>
            {/* Flex Container */}
            <main className="d-flex flex-column align-items-center mt-5">
                {/* Title */}
                <h1 className="mt-3 mb-4">Learn Web development</h1>

                {/* Buttons Container */}
                <div className="mt-5">
                    {linguaggi.map((linguaggio, index) => (
                        <Button
                            key={linguaggio.id}
                            index={index}
                            btnText={linguaggio.nome}
                            activeState={linguaggio.activeState}
                            handleStatusChange={languagesButtonStatusChange}
                        />
                    ))}
                </div>

                {/* Description Card */}
                <div className="card-border text-start w-75 mt-3">
                    <h4>{linguaggi[0].nome}</h4>
                    <p>{linguaggi[0].descrizione}</p>
                </div>
            </main>
        </>
    );
}

export default App;
