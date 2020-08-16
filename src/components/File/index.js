import React, { useContext } from "react";
import { DiJava } from "react-icons/di";
import { FolderContainer } from "./styles.js";
import { AppContext } from "../../utils/context";

export default function File({ name, id }) {
    const { setOpenFile } = useContext(AppContext);

    const handleClickOnFile = () => {
        setOpenFile({ name, id });
    };
    return (
        <FolderContainer onClick={handleClickOnFile}>
            <DiJava size={20} color={"#eee"} />
            <span>{name}</span>
        </FolderContainer>
    );
}
