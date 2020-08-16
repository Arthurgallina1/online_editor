import React from "react";
import { Container } from "./styles";
import Navbar from "../../components/Navbar";
import FileExplorer from "../../components/FileExplorer";

function App() {
    return (
        <Container>
            <Navbar />
            <FileExplorer />
        </Container>
    );
}

export default App;
