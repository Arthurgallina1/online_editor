import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FolderContainer, HeaderContainer, Collapsable } from "./styles";
import File from "../File";
import TreeRecursive from "../TreeRecursive";

export default function Folder({ name, children }) {
    const [isOpen, setIsOpen] = useState(true);
    const handleLick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <FolderContainer>
            <HeaderContainer onClick={handleLick}>
                <FiChevronDown size={20} color={"#EEE"} />
                <span>{name}</span>
            </HeaderContainer>
            <Collapsable isOpen={isOpen}>{children}</Collapsable>
        </FolderContainer>
    );
}
