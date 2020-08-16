import React from "react";
import { AiFillFolder } from "react-icons/ai";
import { FolderContainer } from "./styles.js";

export default function File({ name }) {
    return (
        <FolderContainer>
            <AiFillFolder size={20} color={"#eee"} />
            <span>{name}</span>
        </FolderContainer>
    );
}
