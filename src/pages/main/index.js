import React, { useEffect, useState } from "react";
import { getFileTree } from "../../utils/filesService";
import { Container } from "./styles";
import Navbar from "../../components/Navbar";
import FileExplorer from "../../components/FileExplorer";
import TextEditor from "../../components/TextEditor/index";
import { AppContext } from "../../utils/context";

function App() {
    const [fileTree, setFileTree] = useState([]);
    const [openFile, setOpenFile] = useState(null);
    const [isEditting, setIsEditting] = useState(false);

    useEffect(() => {
        async function mountComponent() {
            const response = await getFileTree();
            setFileTree(response.data);
        }
        mountComponent();
    }, []);

    return (
        <Container>
            <AppContext.Provider
                value={{ openFile, setOpenFile, isEditting, setIsEditting }}
            >
                <Navbar />
                <FileExplorer fileTree={fileTree} />
                <TextEditor />
            </AppContext.Provider>
        </Container>
    );
}

export default App;
