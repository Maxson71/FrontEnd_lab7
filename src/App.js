import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Gallery from "./components/Gallery";

function App() {
    const [task, setTask] = useState(1);

    const handleToggle = () => {
        setTask(task === 1 ? 2 : 1);
    };

    return (
        <div>
            <Header />
            <button onClick={handleToggle}>
                Перемкнути на {task === 1 ? "Завдання 2" : "Завдання 1"}
            </button>
            {task === 1 ? <Content /> : <Gallery />}
        </div>
    );
}

export default App;
