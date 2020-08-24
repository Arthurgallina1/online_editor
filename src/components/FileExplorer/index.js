import React, { useEffect, useState, useContext } from "react";
import { DiJava } from "react-icons/di";
import {
    FileContainer,
    Header,
    SearchBox,
    SearchInput,
    OptionsBox,
} from "./styles";
import { AppContext } from "../../utils/context";
import File from "../File";
import Tree from "../Tree";

export default function FileExplorer({ fileTree }) {
    const [filter, setFilter] = useState("");
    const [showFiles, setShowFiles] = useState([]);
    const { activeItemNav, files, setOpenFile } = useContext(AppContext);

    function findByContent(searchWord) {
        const filteredFiles = files.filter((file) =>
            file.content.includes(searchWord)
        );
        setShowFiles(filteredFiles);
        return filteredFiles;
    }

    const handleFilter = (value) => {
        setFilter(value.toLowerCase());
        findByContent(value);
    };
    return (
        <FileContainer>
            <Header>
                <span>{activeItemNav}</span>
            </Header>
            {activeItemNav === "EXPLORER" && fileTree ? (
                fileTree.map((file) => {
                    return (
                        <>
                            <Tree
                                key={file.id}
                                data={fileTree}
                                children={file.children}
                            />
                        </>
                    );
                })
            ) : (
                <SearchBox>
                    <SearchInput
                        type='text'
                        placeholder='Search'
                        onChange={(e) => handleFilter(e.target.value)}
                    />
                    <OptionsBox>
                        {filter.length > 0 && (
                            <h5>
                                {showFiles.length} files found with this word,
                                click to open.
                            </h5>
                        )}
                        {filter.length > 0 &&
                            showFiles.map((file) => (
                                <div
                                    onClick={() =>
                                        setOpenFile({
                                            name: file.name,
                                            id: file.id,
                                        })
                                    }
                                    className='items-list'
                                >
                                    <DiJava size={20} color={"#eee"} />
                                    {file.name}
                                </div>
                            ))}
                    </OptionsBox>
                </SearchBox>
            )}
        </FileContainer>
    );
}
