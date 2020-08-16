import React, { useEffect, useState } from "react";
import { FileContainer, Header, Folders } from "./styles";
import { getFileTree } from "../../services/filesService";
import File from "../File";
import Tree from "../Tree";

export default function FileExplorer() {
    const [fileTree, setFileTree] = useState([]);

    useEffect(() => {
        async function mountComponent() {
            const response = await getFileTree();
            setFileTree(response.data);
        }
        mountComponent();
    }, []);

    return (
        <FileContainer>
            <Header>
                <span>EXPLORER</span>
            </Header>
            {fileTree &&
                fileTree.map((file) => (
                    <>
                        <Tree
                            key={file.id}
                            data={fileTree}
                            children={file.children}
                        />
                    </>
                ))}
        </FileContainer>
    );
}
