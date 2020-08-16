import React, { useEffect, useState } from "react";
import { FileContainer, Header, Folders } from "./styles";
import File from "../File";
import Tree from "../Tree";

export default function FileExplorer({ fileTree }) {
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
