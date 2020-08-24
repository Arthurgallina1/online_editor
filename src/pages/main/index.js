import React, { useEffect, useState } from "react";
import { getFileTree, getFiles } from "../../utils/filesService";
import { Container } from "./styles";
import Navbar from "../../components/Navbar";
import FileExplorer from "../../components/FileExplorer";
import TextEditor from "../../components/TextEditor/index";
import { AppContext } from "../../utils/context";

function App() {
    const [fileTree, setFileTree] = useState([]);
    const [openFile, setOpenFile] = useState(null);
    const [isEditting, setIsEditting] = useState(false);
    const [activeItemNav, setActiveItemNav] = useState("EXPLORER");
    const [files, setFiles] = useState([]);

    useEffect(() => {
        async function mountComponent() {
            const response = await getFileTree();
            setFileTree(response.data);
            const filesResponse = await getFiles();
            setFiles(filesResponse.data);
        }
        mountComponent();
    }, []);

    return (
        <Container>
            <AppContext.Provider
                value={{
                    openFile,
                    setOpenFile,
                    isEditting,
                    setIsEditting,
                    files,
                    setFiles,
                    fileTree,
                    setFileTree,
                    activeItemNav,
                    setActiveItemNav,
                }}
            >
                <Navbar />
                <FileExplorer fileTree={fileTree} />
                <TextEditor />
            </AppContext.Provider>
        </Container>
    );
}

export default App;
