import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { FolderContainer, HeaderContainer, Collapsable } from "./styles";
import File from "../File";
import TreeRecursive from "../TreeRecursive";

export default function Folder({ name, children }) {
    const [isOpen, setIsOpen] = useState(true);
    const handleLick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const Icon = isOpen ? (
        <FiChevronDown size={20} color={"#EEE"} />
    ) : (
        <FiChevronRight size={20} color={"#EEE"} />
    );

    return (
        <FolderContainer>
            <HeaderContainer onClick={handleLick}>
                {Icon}
                <span>{name}</span>
            </HeaderContainer>
            <Collapsable isOpen={isOpen}>{children}</Collapsable>
        </FolderContainer>
    );
}
