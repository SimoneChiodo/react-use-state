import { useState } from "react";

// Components
import Button from "./components/Button";
import Card from "./components/Card";

// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    // Reactive Linguaggi
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

    // Reactive Card-Info
    const [cardInfo, setCardInfo] = useState({
        titolo: linguaggi[0].nome,
        descrizione: linguaggi[0].descrizione,
    });

    // Function: Update Linguaggi Status
    function languagesButtonStatusChange(index) {
        // Update Linguaggi Array
        const updatedLinguaggi = [...linguaggi];

        updatedLinguaggi.map((element, actualIndex) => {
            actualIndex === index
                ? (element.activeState = true)
                : (element.activeState = false);
        });

        setLinguaggi(updatedLinguaggi);

        // Update Card-Info Array
        const updatedCardInfo = cardInfo;

        updatedCardInfo.titolo = updatedLinguaggi[index].nome;
        updatedCardInfo.descrizione = updatedLinguaggi[index].descrizione;

        setCardInfo(updatedCardInfo);
    }

    return (
        <>
            {/* Flex Container */}
            <main className="d-flex flex-column align-items-center mt-5">
                {/* titolo */}
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

                {/* Card */}
                <Card
                    title={cardInfo.titolo}
                    description={cardInfo.descrizione}
                />
            </main>
        </>
    );
}

export default App;
